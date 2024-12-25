const fs = require("fs");
const chalk = require("chalk");
const yargs = require("yargs");
const note = require("./notes.js");

yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "about the note",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    note.addNote(argv.title, argv.body);
  },
});

yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "note to remove",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    note.removeNote(argv.title);
  },
});

yargs.command({
  command: "list",
  describe: "list all notes",
  handler() {
    console.log("listing notes");
  },
});

yargs.command({
  command: "read",
  describe: "read a single note",
  handler() {
    console.log("read a single note");
  },
});
yargs.parse();
