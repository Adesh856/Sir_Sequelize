interface Observer {
    update(data: any): void;
  }
  
  class Subject {
    private observers: Observer[] = [];
  
    public attach(observer: Observer): void {
      this.observers.push(observer);
    }
  
    public detach(observer: Observer): void {
      const index = this.observers.indexOf(observer);
      if (index !== -1) {
        this.observers.splice(index, 1);
      }
    }
  
    public notify(data: any): void {
      for (const observer of this.observers) {
        observer.update(data);
      }
    }
  }
  
  class ConcreteObserver implements Observer {
    public update(data: any): void {
      console.log(`Received update with data: ${data}`);
    }
  }
  
  // Usage
  const subject = new Subject();
  const observer1 = new ConcreteObserver();
  const observer2 = new ConcreteObserver();
  
  subject.attach(observer1);
  subject.attach(observer2);
  
  subject.notify("Hello, observers!");
  