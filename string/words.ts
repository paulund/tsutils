import {unique} from "../array/unique";
import {removeSpecialCharacters} from "./removeSpecialCharacters";

export const words = (text: string): Array<string> => unique(removeSpecialCharacters(text.trim()).split(' '))
