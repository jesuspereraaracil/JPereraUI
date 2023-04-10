"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextInput = exports.TextInputStyled = void 0;
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
exports.TextInputStyled = styled_components_1.default.div `
    background-color: #fabada;
`;
const TextInput = () => {
    return react_1.default.createElement(exports.TextInputStyled, null, "COSA");
};
exports.TextInput = TextInput;
