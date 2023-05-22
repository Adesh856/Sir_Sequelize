class Singleton {
    private static instance: Singleton;
  
    private constructor() {
      // Private constructor to prevent instantiation from outside the class
    }
  
    static getInstance(): Singleton {
      if (!Singleton.instance) {
        Singleton.instance = new Singleton();
      }
      return Singleton.instance;
    }
  
    // Other methods and properties of the Singleton class
  }
  
  // Usage
  const instance1 = Singleton.getInstance();
  const instance2 = Singleton.getInstance();
  console.log(instance1)
  console.log(instance2)
  console.log(instance1 === instance2); // Output: true
  