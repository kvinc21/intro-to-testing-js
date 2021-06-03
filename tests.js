// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe('sayHello', function() {
    it('should be a defined function', function () {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function () {
        expect(typeof sayHello()).toBe("string");
    });
    it("should return 'Hello, Kenneth!' when passed the argument 'Kenneth'. ", function () {
        expect(sayHello("Kenneth")).toBe("Hello, Kenneth!");
    });
    it('should return the string "Hello, Obi!" when executed', function () {
        expect(sayHello("Obi")).toBe("Hello, Obi!");
    });
    it('should return "Hello, World!" when passed the argument of true.', function () {
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it('should return "Hello, World!" when passed the argument of false.', function () {
        expect(sayHello(false)).toBe("Hello, World!");
    });




});