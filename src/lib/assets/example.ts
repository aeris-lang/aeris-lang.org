export type TokenType =
  | "comment"
  | "keyword"
  | "identifier"
  | "function"
  | "type"
  | "operator"
  | "string"
  | "number";

export type Token =
  | {
      type: TokenType;
      text: string;
    }
  | " "
  | "\t";

export const lines: Token[][] = [
  [
    { type: "keyword", text: "import" },
    " ",
    { type: "identifier", text: "std" },
    { type: "operator", text: "." },
    { type: "identifier", text: "io" },
  ],
  [],
  [
    { type: "keyword", text: "fn" },
    " ",
    { type: "function", text: "main" },
    { type: "operator", text: "(" },
    { type: "operator", text: ")" },
    " ",
    { type: "operator", text: "{" },
  ],
  [
    "\t",
    { type: "keyword", text: "let" },
    " ",
    { type: "identifier", text: "name" },
    " ",
    { type: "operator", text: "=" },
    " ",
    { type: "identifier", text: "io" },
    { type: "operator", text: "." },
    { type: "function", text: "read_line" },
    { type: "operator", text: "(" },
    { type: "operator", text: ")" },
    { type: "operator", text: ";" },
  ],
  ["\t", { type: "keyword", text: "try" }, " ", { type: "operator", text: "{" }],
  [
    "\t",
    "\t",
    { type: "function", text: "greet" },
    { type: "operator", text: "(" },
    { type: "keyword", text: "satisfy" },
    " ",
    { type: "identifier", text: "name" },
    { type: "operator", text: ")" },
    { type: "operator", text: ";" },
  ],
  [
    "\t",
    { type: "operator", text: "}" },
    " ",
    { type: "keyword", text: "else" },
    " ",
    { type: "operator", text: "{" },
  ],
  [
    "\t",
    "\t",
    { type: "function", text: "println" },
    { type: "operator", text: "(" },
    { type: "string", text: '"Name cannot be empty!"' },
    { type: "operator", text: ")" },
    { type: "operator", text: ";" },
  ],
  ["\t", { type: "operator", text: "}" }],
  [{ type: "operator", text: "}" }],
  [],
  [
    { type: "keyword", text: "fn" },
    " ",
    { type: "function", text: "greet" },
    { type: "operator", text: "(" },
    { type: "identifier", text: "name" },
    { type: "operator", text: ":" },
    " ",
    { type: "type", text: "String" },
    { type: "operator", text: ")" },
    " ",
    { type: "operator", text: "{" },
  ],
  [
    "\t",
    { type: "keyword", text: "premise" },
    " ",
    { type: "identifier", text: "name" },
    { type: "operator", text: "." },
    { type: "function", text: "len" },
    { type: "operator", text: "(" },
    { type: "operator", text: ")" },
    " ",
    { type: "operator", text: ">" },
    " ",
    { type: "number", text: "0" },
    { type: "operator", text: ";" },
  ],
  [
    "\t",
    { type: "function", text: "println" },
    { type: "operator", text: "(" },
    { type: "string", text: '"Hello, ' },
    { type: "operator", text: "{" },
    { type: "identifier", text: "name" },
    { type: "operator", text: "}" },
    { type: "string", text: '!"' },
    { type: "operator", text: ")" },
    { type: "operator", text: ";" },
  ],
  [{ type: "operator", text: "}" }],
];
