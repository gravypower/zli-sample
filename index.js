"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var zli_1 = require("@gravypower/zli");
var zod_1 = require("@gravypower/zod");
// Subcommand schemas with descriptions
var AddSchema = zod_1.z.object({
    name: zod_1.z.string().describe("The name of the user").aliases("n"),
    age: zod_1.z.number().min(0, "Age must be a non-negative number").describe("The age of the user (must be a number)").aliases("a"),
    verbose: zod_1.z.boolean().optional().describe("Enable verbose logging").aliases("v"),
}).describe("Adds a new user to the database");
var RemoveSchema = zod_1.z.object({
    name: zod_1.z.string().describe("The name of the user to remove (required)").aliases("n"),
    age: zod_1.z.number().min(0, "Age must be a non-negative number").optional().describe("The age of the user (must be a number)").aliases("a"),
}).describe("Removes a user from the database");
var ListSchema = zod_1.z.object({}).describe("Lists all users in the database");
// Initialize the CLI with commands and multiple aliases
var zli = new zli_1.Zli()
    .addCommand("add", AddSchema, function (args) {
    console.log("Executing add command with args:", args);
    // Add user logic here
}, "a", "addition", "new")
    .addCommand("remove", RemoveSchema, function (args) {
    console.log("Executing remove command with args:", args);
    // Remove user logic here
}, "r", "rm")
    .addCommand("list", ListSchema, function () {
    console.log("Executing list command");
    // List users logic here
}, "l", "ls");
// Parse and handle the CLI arguments
zli.parse(process.argv.slice(2));
