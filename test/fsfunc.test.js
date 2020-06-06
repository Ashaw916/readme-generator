const fs = require("fs");
const Fsfunc = require("../fsfunc");

jest.mock("fs");


describe("Fsfunc", () => {
  describe("read", () => {
    it("should call fs.readFileSync with the passed in 'file' argument", () => {
      const fsfunc = new Fsfunc();
      const file = "message.txt";
      let data;
      fs.readFileSync.mockReturnValue("Hello world!");

      data = fsfunc.read(file);

      expect(data).toEqual("Hello world!");
      expect(fs.readFileSync).lastCalledWith(file, "utf8");

    });
  });

  describe("append", () => {
    it("should call fs.appendFileSync with the passed in 'path' and 'data' arguments", () => {
      const fsfunc = new Fsfunc();
      const file = "message.txt";
      let data= "Hello world!";

      fsfunc.append(file, data);
      
      expect(fs.appendFileSync).lastCalledWith(file, data);
    });
  });
});
