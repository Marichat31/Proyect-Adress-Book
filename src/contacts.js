import localforage from "localforage";
import { matchSorter } from "match-sorter";
import sortBy from "sort-by";

export async function getContacts(query) {
    await fakeNetWork(`getContacts:${query}`);
    let contacts = await localforage.getItem("contacts");
    if (!Array.isArray(contacts)) contacts = [];
    if (query) {
        contacts = matchSorter(contacts, query, { keys: ["first", "last"] });
    }
    return contacts.sort(sortBy("last", "createdAt"));
}

export async function createContact() {
    await fakeNetWork();
    let id = Math.random().toString(36).substring(2, 9);
    let contact = { id, createdAt: Date.now() };
    let contacts = await getContacts();
    contacts.unshift(contact);
    await set(contacts);
    return contact;
}

export async function createContactWithData(data) {
    await fakeNetWork();
    // Se hace la validacion
    if (!data.first || !data.last || !data.twitter || !data.notes) {
        throw new Error("Nombre, apellido, Twitter y descripción son obligatorios");
    }
    let id = Math.random().toString(36).substring(2, 9);
    let contact = { id, createdAt: Date.now(), ...data };
    let contacts = await getContacts();
    contacts.unshift(contact);
    await set(contacts);
    return contact;
}

export async function getContact(id) {
    await fakeNetWork(`contact:${id}`);
    let contacts = await localforage.getItem("contacts");
    let contact = contacts.find(contact => contact.id === id);
    return contact ?? null;
}

export async function updateContact(id, updates) {
    await fakeNetWork();
    // Validacións no sean vacíos si se proporcionan
    if (
        updates.first === "" ||
        updates.last === "" ||
        updates.twitter === "" ||
        updates.notes === ""
    ) {
        throw new Error("Nombre, apellido, Twitter y descripción no pueden estar vacíos");
    }
    let contacts = await localforage.getItem("contacts");
    let contact = contacts.find(contact => contact.id === id);
    if (!contact) throw new Error(`No se encontró contacto con id: ${id}`);
    Object.assign(contact, updates);
    await set(contacts);
    return contact;
}

export async function deleteContact(id) {
    let contacts = await localforage.getItem("contacts");
    let index = contacts.findIndex(contact => contact.id === id);
    if (index > -1) {
        contacts.splice(index, 1);
        await set(contacts);
        return true;
    }
    return false;
}

function set(contacts) {
    return localforage.setItem("contacts", contacts);
}

// Simula un cache para no ralentizar las cosas que ya se vieron
let fakeCache = {};

async function fakeNetWork(key) {
    if (!key) {
        fakeCache = {};
        return;
    }
    if (fakeCache[key]) {
        return;
    }

    fakeCache[key] = true;
    return new Promise(res => {
        setTimeout(res, 0);
    });
}