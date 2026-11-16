//1
class User {
    private id: number;
    private name: string;
    private email: string;
    private password: string;
    private phone: string;
    private age: number;

    //5
    public notebooks: NoteBook[] = [];

    constructor(id: number, name: string, email: string, password: string, phone: string, age: number) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.phone = phone;

        if (age >= 18 && age <= 60) {
            this.age = age;
        } else {
            throw new Error("Age must be between 18 and 60");
        }
    }

    displayInfo(): void {
        console.log(`ID: ${this.id} Name:${this.name} Email:${this.email} Phone:${this.phone} Age: ${this.age}`);
    }
    addNotebook(notebook: NoteBook): void {
        this.notebooks.push(notebook);
    }
}


//2
class Admin extends User {
    manage(): void {
        console.log("Admin manage notes");
    }
}
let admin1 = new Admin(
    2,
    "zakaria",
    "zakaria@gmail.com",
    "12345678",
    "01026292",
    25
);

admin1.displayInfo();
admin1.manage();

//3
class Note {
    id: Number;
    tittle: string;
    content: string;
    //6
    userId: User;

    constructor(id: Number, tittle: string, content: string, userId: User) {
        this.id = id;
        this.tittle = tittle;
        this.content = content;
        this.userId = userId;
    }
    preview(): string {
        return this.content.substring(0, 20);
    }
}

//4
class NoteBook {
    private notes: Note[] = [];
    addNote(id: number, title: string, content: string, user: User): void {
        let note = new Note(id, title, content, user);
        this.notes.push(note);
    }
    removeNote(id: number): void {
        this.notes = this.notes.filter(note => note.id !== id);
    }
    displayNotes(): void {
        console.log(this.notes);
    }
}

//7
class Storage<T> {
    private items: T[] = [];

    addItem(item: T): void {
        this.items.push(item);
    }

    removeItem(item: T): void {
        this.items = this.items.filter(i => i !== item);
    }

    getAllItems(): T[] {
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

let storage1 = new Storage<string>();

storage1.addItem("Hello");
storage1.addItem("TypeScript");

console.log(storage1.getAllItems());
