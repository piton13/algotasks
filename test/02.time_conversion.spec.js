import { expect } from "chai";

import { convertTime } from "../tasks/02.time_conversion";

describe.only("Convert time from AM/PM format to military", () => {
	it("should convert 12 AM", () => {
		expect(convertTime('12:00:00AM')).to.equal('00:00:00');
	});

	it("should convert 12:49 AM", () => {
		expect(convertTime('12:49:00AM')).to.equal('00:49:00');
	});

	it("should convert 9:59 AM", () => {
		expect(convertTime('09:59:00AM')).to.equal('09:59:00');
	});

	it("should convert 11:59 AM", () => {
		expect(convertTime('11:59:00AM')).to.equal('11:59:00');
	});

	it("should convert 12:00 PM", () => {
		expect(convertTime('12:00:00PM')).to.equal('12:00:00');
	});

	it("should convert 1:00 PM", () => {
		expect(convertTime('01:00:00PM')).to.equal('13:00:00');
	});

	it("should convert 11:59 PM", () => {
		expect(convertTime('11:59:00PM')).to.equal('23:59:00');
	});
});
