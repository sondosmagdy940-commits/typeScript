"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    id;
    name;
    email;
    password;
    phone;
    age;
    notebooks = [];
    constructor(id, name, email, password, phone, age) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.phone = phone;
        if (age >= 18 && age <= 60) {
            this.age = age;
        }
        else {
            throw new Error("Age must be between 18 and 60");
        }
    }
    displayInfo() {
        console.log(`ID: ${this.id} Name:${this.name} Email:${this.email} Phone:${this.phone} Age: ${this.age}`);
    }
    addNotebook(notebook) {
        this.notebooks.push(notebook);
    }
}
class Admin extends User {
    manage() {
        console.log("Admin manage notes");
    }
}
let admin1 = new Admin(2, "zakaria", "zakaria@gmail.com", "12345678", "01026292", 25);
admin1.displayInfo();
admin1.manage();
class Note {
    id;
    tittle;
    content;
    userId;
    constructor(id, tittle, content, userId) {
        this.id = id;
        this.tittle = tittle;
        this.content = content;
        this.userId = userId;
    }
    preview() {
        return this.content.substring(0, 20);
    }
}
class NoteBook {
    notes = [];
    addNote(id, title, content, user) {
        let note = new Note(id, title, content, user);
        this.notes.push(note);
    }
    removeNote(id) {
        this.notes = this.notes.filter(note => note.id !== id);
    }
    displayNotes() {
        console.log(this.notes);
    }
}
class Storage {
    items = [];
    addItem(item) {
        this.items.push(item);
    }
    removeItem(item) {
        this.items = this.items.filter(i => i !== item);
    }
    getAllItems() {
        return this.items;
    }
}
let user3 = new User(1, "Ahmed", "ahmed@gmail.com", "12345678", "01012345678", 25);
user3.displayInfo();
let notebook1 = new NoteBook();
user3.addNotebook(notebook1);
notebook1.addNote(1, "My Note", "This is my first note in TypeScript", user3);
notebook1.displayNotes();
let admin2 = new Admin(2, "Ali", "ali@gmail.com", "12345678", "01098765432", 30);
admin2.manage();
let storage1 = new Storage();
storage1.addItem("Hello");
storage1.addItem("TypeScript");
console.log(storage1.getAllItems());
