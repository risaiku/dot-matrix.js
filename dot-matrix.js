//
// dot-matrix.js
// v1.1
//
// Copyright (c) 2015-2017 risaiku
// This software is released under the MIT License.
//
// http://risaiku.net
// https://github.com/risaiku/dot-matrix.js
//

function DotMatrix(id) {
	this.target = document.getElementById(id);
	while (this.target.firstChild) this.target.removeChild(this.target.firstChild);
	this.CODE_SEG_TABLE = [];
	this.CODE_SEG_TABLE[ 32] = [0x00, 0x00, 0x00, 0x00, 0x00]; // ' '(0x20)
	this.CODE_SEG_TABLE[ 33] = [0x00, 0x07, 0x5F, 0x07, 0x00]; // '!'(0x21)
	this.CODE_SEG_TABLE[ 34] = [0x03, 0x00, 0x03, 0x00, 0x00]; // '"'(0x22)
	this.CODE_SEG_TABLE[ 35] = [0x14, 0x7F, 0x14, 0x7F, 0x14]; // '#'(0x23)
	this.CODE_SEG_TABLE[ 36] = [0x24, 0x2A, 0x7F, 0x2A, 0x12]; // '$'(0x24)
	this.CODE_SEG_TABLE[ 37] = [0x23, 0x13, 0x08, 0x64, 0x62]; // '%'(0x25)
	this.CODE_SEG_TABLE[ 38] = [0x36, 0x49, 0x59, 0x26, 0x50]; // '&'(0x26)
	this.CODE_SEG_TABLE[ 39] = [0x0B, 0x07, 0x00, 0x00, 0x00]; // '''(0x27)
	this.CODE_SEG_TABLE[ 40] = [0x00, 0x3E, 0x41, 0x00, 0x00]; // '('(0x28)
	this.CODE_SEG_TABLE[ 41] = [0x00, 0x00, 0x41, 0x3E, 0x00]; // ')'(0x29)
	this.CODE_SEG_TABLE[ 42] = [0x08, 0x2A, 0x1C, 0x2A, 0x08]; // '*'(0x2a)
	this.CODE_SEG_TABLE[ 43] = [0x08, 0x08, 0x3E, 0x08, 0x08]; // '+'(0x2b)
	this.CODE_SEG_TABLE[ 44] = [0x50, 0x30, 0x00, 0x00, 0x00]; // ','(0x2c)
	this.CODE_SEG_TABLE[ 45] = [0x08, 0x08, 0x08, 0x08, 0x08]; // '-'(0x2d)
	this.CODE_SEG_TABLE[ 46] = [0x00, 0x60, 0x60, 0x00, 0x00]; // '.'(0x2e)
	this.CODE_SEG_TABLE[ 47] = [0x20, 0x10, 0x08, 0x04, 0x02]; // '/'(0x2f)
	this.CODE_SEG_TABLE[ 48] = [0x3E, 0x51, 0x49, 0x45, 0x3E]; // '0'(0x30)
	this.CODE_SEG_TABLE[ 49] = [0x00, 0x42, 0x7F, 0x40, 0x00]; // '1'(0x31)
	this.CODE_SEG_TABLE[ 50] = [0x62, 0x51, 0x49, 0x49, 0x46]; // '2'(0x32)
	this.CODE_SEG_TABLE[ 51] = [0x22, 0x41, 0x49, 0x49, 0x36]; // '3'(0x33)
	this.CODE_SEG_TABLE[ 52] = [0x18, 0x14, 0x12, 0x7F, 0x10]; // '4'(0x34)
	this.CODE_SEG_TABLE[ 53] = [0x27, 0x45, 0x45, 0x45, 0x39]; // '5'(0x35)
	this.CODE_SEG_TABLE[ 54] = [0x3C, 0x4A, 0x49, 0x49, 0x30]; // '6'(0x36)
	this.CODE_SEG_TABLE[ 55] = [0x01, 0x71, 0x09, 0x05, 0x03]; // '7'(0x37)
	this.CODE_SEG_TABLE[ 56] = [0x36, 0x49, 0x49, 0x49, 0x36]; // '8'(0x38)
	this.CODE_SEG_TABLE[ 57] = [0x06, 0x49, 0x49, 0x29, 0x1E]; // '9'(0x39)
	this.CODE_SEG_TABLE[ 58] = [0x00, 0x00, 0x36, 0x00, 0x00]; // ':'(0x3a)
	this.CODE_SEG_TABLE[ 59] = [0x00, 0x40, 0x36, 0x00, 0x00]; // ';'(0x3b)
	this.CODE_SEG_TABLE[ 60] = [0x08, 0x14, 0x22, 0x00, 0x00]; // '<'(0x3c)
	this.CODE_SEG_TABLE[ 61] = [0x00, 0x14, 0x14, 0x14, 0x00]; // '='(0x3d)
	this.CODE_SEG_TABLE[ 62] = [0x00, 0x00, 0x22, 0x14, 0x08]; // '>'(0x3e)
	this.CODE_SEG_TABLE[ 63] = [0x06, 0x01, 0x59, 0x0F, 0x06]; // '?'(0x3f)
	this.CODE_SEG_TABLE[ 64] = [0x3E, 0x41, 0x5D, 0x55, 0x1E]; // '@'(0x40)
	this.CODE_SEG_TABLE[ 65] = [0x7E, 0x09, 0x09, 0x09, 0x7E]; // 'A'(0x41)
	this.CODE_SEG_TABLE[ 66] = [0x7F, 0x49, 0x49, 0x49, 0x36]; // 'B'(0x42)
	this.CODE_SEG_TABLE[ 67] = [0x3E, 0x41, 0x41, 0x41, 0x22]; // 'C'(0x43)
	this.CODE_SEG_TABLE[ 68] = [0x7F, 0x41, 0x41, 0x41, 0x3E]; // 'D'(0x44)
	this.CODE_SEG_TABLE[ 69] = [0x7F, 0x49, 0x49, 0x49, 0x41]; // 'E'(0x45)
	this.CODE_SEG_TABLE[ 70] = [0x7F, 0x09, 0x09, 0x09, 0x01]; // 'F'(0x46)
	this.CODE_SEG_TABLE[ 71] = [0x3E, 0x41, 0x49, 0x49, 0x7A]; // 'G'(0x47)
	this.CODE_SEG_TABLE[ 72] = [0x7F, 0x08, 0x08, 0x08, 0x7F]; // 'H'(0x48)
	this.CODE_SEG_TABLE[ 73] = [0x00, 0x41, 0x7F, 0x41, 0x00]; // 'I'(0x49)
	this.CODE_SEG_TABLE[ 74] = [0x20, 0x41, 0x41, 0x3F, 0x01]; // 'J'(0x4a)
	this.CODE_SEG_TABLE[ 75] = [0x7F, 0x08, 0x14, 0x22, 0x41]; // 'K'(0x4b)
	this.CODE_SEG_TABLE[ 76] = [0x7F, 0x40, 0x40, 0x40, 0x40]; // 'L'(0x4c)
	this.CODE_SEG_TABLE[ 77] = [0x7F, 0x02, 0x0C, 0x02, 0x7F]; // 'M'(0x4d)
	this.CODE_SEG_TABLE[ 78] = [0x7F, 0x04, 0x08, 0x10, 0x7F]; // 'N'(0x4e)
	this.CODE_SEG_TABLE[ 79] = [0x3E, 0x41, 0x41, 0x41, 0x3E]; // 'O'(0x4f)
	this.CODE_SEG_TABLE[ 80] = [0x7F, 0x09, 0x09, 0x09, 0x06]; // 'P'(0x50)
	this.CODE_SEG_TABLE[ 81] = [0x3E, 0x41, 0x51, 0x21, 0x5E]; // 'Q'(0x51)
	this.CODE_SEG_TABLE[ 82] = [0x7F, 0x09, 0x19, 0x29, 0x46]; // 'R'(0x52)
	this.CODE_SEG_TABLE[ 83] = [0x26, 0x49, 0x49, 0x49, 0x32]; // 'S'(0x53)
	this.CODE_SEG_TABLE[ 84] = [0x01, 0x01, 0x7F, 0x01, 0x01]; // 'T'(0x54)
	this.CODE_SEG_TABLE[ 85] = [0x3F, 0x40, 0x40, 0x40, 0x3F]; // 'U'(0x55)
	this.CODE_SEG_TABLE[ 86] = [0x0F, 0x10, 0x60, 0x10, 0x0F]; // 'V'(0x56)
	this.CODE_SEG_TABLE[ 87] = [0x7F, 0x20, 0x1C, 0x20, 0x7F]; // 'W'(0x57)
	this.CODE_SEG_TABLE[ 88] = [0x63, 0x14, 0x08, 0x14, 0x63]; // 'X'(0x58)
	this.CODE_SEG_TABLE[ 89] = [0x03, 0x04, 0x78, 0x04, 0x03]; // 'Y'(0x59)
	this.CODE_SEG_TABLE[ 90] = [0x61, 0x51, 0x49, 0x45, 0x43]; // 'Z'(0x5a)
	this.CODE_SEG_TABLE[ 91] = [0x00, 0x7F, 0x41, 0x00, 0x00]; // '['(0x5b)
	this.CODE_SEG_TABLE[ 92] = [0x02, 0x04, 0x08, 0x10, 0x20]; // '\'(0x5c)
	this.CODE_SEG_TABLE[ 93] = [0x00, 0x00, 0x41, 0x7F, 0x00]; // ']'(0x5d)
	this.CODE_SEG_TABLE[ 94] = [0x02, 0x01, 0x02, 0x00, 0x00]; // '^'(0x5e)
	this.CODE_SEG_TABLE[ 95] = [0x00, 0x40, 0x40, 0x40, 0x00]; // '_'(0x5f)
	this.CODE_SEG_TABLE[ 96] = [0x01, 0x02, 0x00, 0x00, 0x00]; // '`'(0x60)
	this.CODE_SEG_TABLE[ 97] = [0x20, 0x54, 0x54, 0x78, 0x40]; // 'a'(0x61)
	this.CODE_SEG_TABLE[ 98] = [0x7F, 0x48, 0x44, 0x44, 0x38]; // 'b'(0x62)
	this.CODE_SEG_TABLE[ 99] = [0x38, 0x44, 0x44, 0x44, 0x28]; // 'c'(0x63)
	this.CODE_SEG_TABLE[100] = [0x38, 0x44, 0x44, 0x48, 0x7F]; // 'd'(0x64)
	this.CODE_SEG_TABLE[101] = [0x38, 0x54, 0x54, 0x54, 0x18]; // 'e'(0x65)
	this.CODE_SEG_TABLE[102] = [0x08, 0x7E, 0x09, 0x0A, 0x00]; // 'f'(0x66)
	this.CODE_SEG_TABLE[103] = [0x0C, 0x52, 0x52, 0x52, 0x3C]; // 'g'(0x67)
	this.CODE_SEG_TABLE[104] = [0x7F, 0x10, 0x08, 0x08, 0x70]; // 'h'(0x68)
	this.CODE_SEG_TABLE[105] = [0x00, 0x4A, 0x7A, 0x40, 0x00]; // 'i'(0x69)
	this.CODE_SEG_TABLE[106] = [0x20, 0x40, 0x4A, 0x3A, 0x00]; // 'j'(0x6a)
	this.CODE_SEG_TABLE[107] = [0x7F, 0x10, 0x28, 0x44, 0x00]; // 'k'(0x6b)
	this.CODE_SEG_TABLE[108] = [0x00, 0x41, 0x7F, 0x40, 0x00]; // 'l'(0x6c)
	this.CODE_SEG_TABLE[109] = [0x78, 0x04, 0x18, 0x04, 0x78]; // 'm'(0x6d)
	this.CODE_SEG_TABLE[110] = [0x7C, 0x08, 0x04, 0x04, 0x78]; // 'n'(0x6e)
	this.CODE_SEG_TABLE[111] = [0x38, 0x44, 0x44, 0x44, 0x38]; // 'o'(0x6f)
	this.CODE_SEG_TABLE[112] = [0x7E, 0x12, 0x12, 0x0C, 0x00]; // 'p'(0x70)
	this.CODE_SEG_TABLE[113] = [0x0C, 0x12, 0x12, 0x7E, 0x40]; // 'q'(0x71)
	this.CODE_SEG_TABLE[114] = [0x7E, 0x08, 0x04, 0x04, 0x00]; // 'r'(0x72)
	this.CODE_SEG_TABLE[115] = [0x48, 0x54, 0x54, 0x54, 0x24]; // 's'(0x73)
	this.CODE_SEG_TABLE[116] = [0x04, 0x04, 0x3E, 0x44, 0x20]; // 't'(0x74)
	this.CODE_SEG_TABLE[117] = [0x3C, 0x40, 0x40, 0x20, 0x7C]; // 'u'(0x75)
	this.CODE_SEG_TABLE[118] = [0x1C, 0x20, 0x40, 0x20, 0x1C]; // 'v'(0x76)
	this.CODE_SEG_TABLE[119] = [0x3C, 0x40, 0x30, 0x40, 0x3C]; // 'w'(0x77)
	this.CODE_SEG_TABLE[120] = [0x44, 0x28, 0x10, 0x28, 0x44]; // 'x'(0x78)
	this.CODE_SEG_TABLE[121] = [0x44, 0x48, 0x30, 0x08, 0x04]; // 'y'(0x79)
	this.CODE_SEG_TABLE[122] = [0x44, 0x64, 0x54, 0x4C, 0x44]; // 'z'(0x7a)
	this.CODE_SEG_TABLE[123] = [0x08, 0x36, 0x41, 0x00, 0x00]; // '{'(0x7b)
	this.CODE_SEG_TABLE[124] = [0x00, 0x00, 0x7F, 0x00, 0x00]; // '|'(0x7c)
	this.CODE_SEG_TABLE[125] = [0x00, 0x00, 0x41, 0x36, 0x08]; // '}'(0x7d)
	this.CODE_SEG_TABLE[126] = [0x08, 0x04, 0x08, 0x10, 0x08]; // '~'(0x7e)
};

DotMatrix.SVGNS    = "http://www.w3.org/2000/svg";
DotMatrix.XLINKNS  = "http://www.w3.org/1999/xlink";
DotMatrix.CENTER_X = [5, 15, 25, 35, 45];
DotMatrix.CENTER_Y = [5, 15, 25, 35, 45, 55, 65];
DotMatrix.COLORS   = ["red", "orange", "yellow", "green", "lightblue", "blue", "purple"];

DotMatrix.DEFAULT_OPTION = {
	value    : "",          // 表示するデータ
	bgColor  : "black",
	colorOn  : "red",      // Special:rainbow
	colorOff : "#320000",  // Special:rainbow
	shape    : "round",    // square or round
	margin   : 6,
	digit    : -1,          // 正の値が設定された場合は桁数指定
	slant    : 0            // 傾き
};

DotMatrix.prototype = {
	draw : function(option) {
		var value     = this.__getOption(option, "value");
		var slant     = this.__getOption(option, "slant");
		var bgColor   = this.__getOption(option, "bgColor");
		var shape     = this.__getOption(option, "shape");
		var margin    = this.__getOption(option, "margin");
		this.digit    = this.__getOption(option, "digit");
		this.colorOn  = this.__getOption(option, "colorOn");
		this.colorOff = this.__getOption(option, "colorOff");

		if (this.digit === -1) {
			this.digit = value.length;
		}

		var segArray = this.__getSegArray(value.toString());
		var charLen  = segArray.length;
		var loopCnt  = this.digit == -1 ? charLen : this.digit;
		var rainbowIndex = 0;

		var marginHalf   = margin / 2;
		var marginSide = 0;
		if (slant != 0) {
			marginSide = 70 / Math.tan((90 - slant) * Math.PI/180);
		}
		var viewBoxWidth  = (50 + marginHalf) * charLen + marginHalf + marginSide;
		var viewBoxHeight = margin + 70;

		var container = document.createElement("div");
		container.setAttribute("style", "display: inline-block; height: 100%; width: 100%;");
		container.setAttribute("title", value);

		var svg = document.createElementNS(DotMatrix.SVGNS, "svg");
		svg.setAttribute("viewBox", "0 0 " + viewBoxWidth + " " + viewBoxHeight);
		svg.setAttribute("style", "background-color:" + bgColor + "; display: inline-block; overflow: hidden; stroke-width: 0; width: 100%; height: 100%;");

		container.appendChild(svg);
		this.target.appendChild(container);

		var g = document.createElementNS(DotMatrix.SVGNS, "g");
		svg.appendChild(g);

		if (slant != 0) {
			g.setAttribute("transform", "skewX(" + (-slant) + ")");
		}

		var offsetX = marginHalf + marginSide;

		for (var i = 0; i < loopCnt; i++) {

			var segOnOff = segArray[i];

			var len = segOnOff.length;

			for (var x = 0; x < segOnOff.length; x++) {
				var pos = 0x40;

				for (var y = 6; y >= 0; y--) {
					var color;
					if (this.colorOn === "rainbow") {
						cOn = DotMatrix.COLORS[rainbowIndex];
					} else {
						cOn = this.colorOn;
					}
					if (this.colorOff === "rainbow") {
						cOff = DotMatrix.COLORS[rainbowIndex];
					} else {
						cOff = this.colorOff;
					}

					if ((segOnOff[x] & pos) == pos) {
						if (this.colorOn === "rainbow") {
							color = cOn;
						} else {
							color = cOn;
						}
					} else {
						color = cOff;
					}

					if (shape === "square") {
						g.appendChild(this.__createElementPolyline(DotMatrix.CENTER_X[x] - 4 + offsetX, DotMatrix.CENTER_Y[y] - 4 + marginHalf, color));
					} else {
						g.appendChild(this.__createElementCircle(DotMatrix.CENTER_X[x] + offsetX, DotMatrix.CENTER_Y[y] + marginHalf, 4, color));
					}

					pos = pos >>> 1;
				}

			}

			rainbowIndex ++;
			if (rainbowIndex > 6) {
				rainbowIndex = 0;
			}

			offsetX += marginHalf + 50;
		}
	},

	changeValue : function(value) {
		var target = this.target;
		var segArray = this.__getSegArray(value);
		var rainbowIndex = 0;
		var idx = 0;
		for (var i = 0; i < segArray.length; i++) {
			var segOnOff = segArray[i];
			for (var x = 0; x < segOnOff.length; x++) {
				var pos = 0x40;
				for (var y = 6; y >= 0; y--) {
					var color;
					if ((segOnOff[x] & pos) == pos) {
						if (this.colorOn === "rainbow") {
							color = DotMatrix.COLORS[rainbowIndex];
						} else {
							color = this.colorOn;
						}
					} else {
						if (this.colorOff === "rainbow") {
							color = DotMatrix.COLORS[rainbowIndex];
						} else {
							color = this.colorOff;
						}
					}
					this.__setStyleShape(target.childNodes[0].childNodes[0].childNodes[0].childNodes[idx++], color);
					pos = pos >>> 1;
				}
			}
			rainbowIndex ++;
			if (rainbowIndex > 6) {
				rainbowIndex = 0;
			}
		}
	},


	// 
	// private method
	// 

	__charToCode : function(char, pos) {
		if (pos >= char.length) {
			return 0x20;
		}
		var charCode = char.charCodeAt(pos);
		if (!this.CODE_SEG_TABLE[charCode]) {
			return 0x20;
		}
		return charCode;
	},

	__createElementPolyline : function(x, y, color) {
		var polyline = document.createElementNS(DotMatrix.SVGNS, "polyline");
		var points = x + " " + y + ", " + x + " " + (y + 8) + ", " + (x + 8) + " " + (y + 8) + ", " + (x + 8) + " " + y;
		polyline.setAttribute("points", points);
		this.__setStyleShape(polyline, color);
		return polyline;
	},

	__createElementCircle : function(x, y, r, color) {
		var circle = document.createElementNS(DotMatrix.SVGNS, "circle");
		circle.setAttribute("cx", x);
		circle.setAttribute("cy", y);
		circle.setAttribute("r" , r);
		this.__setStyleShape(circle, color);
		return circle;
	},

	__setStyleShape : function(shape, color) {
		shape.setAttribute("style", "fill:" + color);
	},

	__getOption : function(option, key) {
		return key in option ? option[key] : DotMatrix.DEFAULT_OPTION[key];
	},

	__getSegArray : function(value) {
		var buf = [];
		for (var i = 0; i < this.digit; i++) {
			if (i < value.length) {
				var code = this.__charToCode(value, i);
				buf[i] = this.CODE_SEG_TABLE[code];
			} else {
				buf[i] = [0x00, 0x00, 0x00, 0x00, 0x00];
			}
		}

		return buf;
	}
};
