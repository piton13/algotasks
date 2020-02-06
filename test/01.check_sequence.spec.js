import { expect } from "chai";

import { validate } from "../tasks/01.check_sequence";

describe("Check sequential numbers in input string", () => {
	it("should pass sequential numbers", () => {
		expect(validate('123')).to.equal('1');
	});

	
	it("should not pass sequential numbers", () => {
		expect(validate('321')).to.equal('Invalid input');
	});
	
	it("should pass sequential numbers with length 2", () => {
		expect(validate('19202122')).to.equal('19');
	});

	it("should not pass sequential numbers with length 2", () => {
		expect(validate('2122232')).to.equal('Invalid input');
	});
	
	it("should pass sequential numbers with length 3", () => {
		expect(validate('312313314')).to.equal('312');
	});

	it("should not pass sequential numbers with length 3", () => {
		expect(validate('123123122')).to.equal('Invalid input');
	});
	
	it("should be valid 99100", () => {
		expect(validate('99100')).to.equal('99');
	});

	it("should be invalid 10100", () => {
		expect(validate('10100')).to.equal('Invalid input');
	});

	it("should be invalid 0123", () => {
		expect(validate('0123')).to.equal('Invalid input');
	});
});
