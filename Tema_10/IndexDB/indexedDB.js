
export function createDB() {
    // Open a connection to the database
    const request = indexedDB.open("myDatabase", 1);

    request.onupgradeneeded = function (event) {
        const db = event.target.result;
        if (!db.objectStoreNames.contains('customers')) {
            // Create an object store to hold information about our customers.
            const objectStore = db.createObjectStore("customers", { keyPath: "id" });
            // Create an index to search customers by name.
            objectStore.createIndex("name", "name", { unique: false });
            // Create an index to search customers by email.
            objectStore.createIndex("email", "email", { unique: true });
        }
    };

    request.onsuccess = function (event) {
        // Example usage
        addCustomer({ id: 1, name: "John Doe", email: "johndoe@example.com" });
        addCustomer({ id: 2, name: "John Doe 2", email: "johndoe2@example.com" });
        addCustomer({ id: 3, name: "John Doe 3", email: "johndoe3@example.com" });
    };

    request.onerror = function (event) {
        console.log("Error creating/accessing IndexedDB database");
    };

}
// Function to add a customer to the database
export function addCustomer(customer) {
    const database = indexedDB.open("myDatabase", 1);
    database.onsuccess = (event) => {
        const db = event.target.result;
        const transaction = db.transaction(["customers"], "readwrite");
        const objectStore = transaction.objectStore("customers");
        const request = objectStore.add(customer);
        request.onsuccess = function (event) {
            console.log("Customer has been added to your database.");
        };

        request.onerror = function (event) {
            console.log("Unable to add customer to your database.");
        };
    };
}

// Function to read a customer from the database
export function getCustomer(id) {
    const database = indexedDB.open("myDatabase", 1);
    database.onsuccess = (event) => {
        const db = event.target.result;
        const transaction = db.transaction(["customers"]);
        const objectStore = transaction.objectStore("customers");
        const request = objectStore.get(id);
        request.onsuccess = function (event) {
            console.log("Customer: " + request.result);
        };

        request.onerror = function (event) {
            console.log("Unable to retrieve customer from your database.");
        };
    }
}

// Function to read all customers
export async function getAllCustomers() {
    return new Promise((resolve, reject) => {
        const database = indexedDB.open("myDatabase", 1);
        database.onsuccess = (event) => {
            const db = event.target.result;
            const transaction = db.transaction(["customers"]);
            const objectStore = transaction.objectStore("customers");
            const request = objectStore.getAll()
            request.onsuccess = function (event) {
                resolve(request.result);
            };

            request.onerror = function (event) {
                console.log("Unable to retrieve customer from your database.");
                reject();
            };
        }
    });
}

// Function to update a customer in the database
export function updateCustomer(customer) {
    const db = indexedDB.open("myDatabase", 1);
    const transaction = db.transaction(["customers"], "readwrite");
    const objectStore = transaction.objectStore("customers");
    const request = objectStore.put(customer);
    request.onsuccess = function (event) {
        console.log("Customer has been updated in your database.");
    };

    request.onerror = function (event) {
        console.log("Unable to update customer in your database.");
    };
}

// Function to delete a customer from the database
export function deleteCustomer(id) {
    const db = indexedDB.open("myDatabase", 1);
    const transaction = db.transaction(["customers"], "readwrite");
    const objectStore = transaction.objectStore("customers");
    const request = objectStore.delete(id);
    request.onsuccess = function (event) {
        console.log("Customer has been removed from your database.");
    };

    request.onerror =
        function (event) {
            console.log("Unable to remove customer from your database.");
        };
}
