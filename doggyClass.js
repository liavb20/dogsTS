"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
console.log("hello");
var axios_1 = __importDefault(require("axios"));
var Dog = /** @class */ (function () {
    function Dog(name, age, hunger, sex) {
        if (name === void 0) { name = 'rexi'; }
        if (age === void 0) { age = 3; }
        if (hunger === void 0) { hunger = 4; }
        if (sex === void 0) { sex = 'female'; }
        this.name = name;
        this.age = age;
        this.hunger = hunger;
        this.sex = sex;
    }
    Dog.prototype.setName = function (name) {
        this.name = name;
    };
    Dog.prototype.growUp = function () {
        this.age++;
    };
    Dog.prototype.setHunger = function (hunger) {
        if (hunger > 10 || hunger < 0)
            throw new Error('hunger must be between 0 to 10');
        else
            this.hunger = hunger;
    };
    Dog.prototype.feed = function () {
        if (this.hunger > 5) {
            this.hunger = 0;
            console.log("the pet ate");
        }
        else
            console.log("the pet not hungry");
    };
    Dog.prototype.speak = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        console.log("taking dogs");
                        _b = (_a = console).log;
                        return [4 /*yield*/, axios_1.default.get(url)];
                    case 1:
                        _b.apply(_a, [(_c.sent()).data.quote]);
                        return [2 /*return*/];
                }
            });
        });
    };
    return Dog;
}());
(function () { return __awaiter(void 0, void 0, void 0, function () {
    var dog1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                dog1 = new Dog();
                console.log(dog1);
                dog1.setName("RAMI");
                console.log(dog1);
                dog1.growUp();
                console.log(dog1);
                dog1.setHunger(9);
                console.log(dog1);
                dog1.feed();
                dog1.feed();
                dog1.setHunger(6);
                dog1.feed();
                dog1.feed();
                return [4 /*yield*/, dog1.speak('https://api.kanye.rest/')];
            case 1:
                _a.sent();
                console.log("THE END ");
                return [2 /*return*/];
        }
    });
}); })();
//# sourceMappingURL=doggyClass.js.map