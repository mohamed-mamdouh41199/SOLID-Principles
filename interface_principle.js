// This is the fourth principle of SOLID: Interface Segregation Principle (ISP)
// The Interface Segregation Principle states that no client should be forced to depend on methods it does not use.

class Printer {
  print(document) {
    console.log(`Printing: ${document}`);
  }
}
class Scanner {
  scan(document) {
    console.log(`Scanning: ${document}`);
  }
}
class MultiFunctionPrinter {
  constructor() {
    this.printer = new Printer();
    this.scanner = new Scanner();
  }

  print(document) {
    this.printer.print(document);
  }

  scan(document) {
    this.scanner.scan(document);
  }
}
// Usage
const mfp = new MultiFunctionPrinter();
mfp.print("Document 1");
mfp.scan("Document 2");
