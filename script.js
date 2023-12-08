// Create a list/array containing all of the possible items to draw from
const items = [
    { name: 'youmuu', num: 1, image: 'resources/youmuu.jpg' },
    { name: 'item2', num: 2, image: 'resources/item2.jpg' },
    { name: 'item3', num: 3, image: 'resources/item3.jpg' },
    { name: 'item4', num: 4, image: 'resources/item4.jpg' },
    { name: 'item5', num: 5, image: 'resources/item5.jpg' },
];

// Create a function that generates 5x random numbers that will pull 5x objects from the array
const select = () => {
    const selected = [];

    for (let i = 0; i < 5; i++) {
        let randNum;

        do {
            randNum = Math.ceil(Math.random() * 5);
        } while (selected.includes(randNum));

        selected.push(randNum);
    }

    console.log("Selected numbers:", selected);
    return selected;
};

// Create a function that displays the selected items on the HTML
const displaySelected = (selected) => {
    selected.forEach((selectedNum, index) => {
        const selectedObject = items.find(item => item.num === selectedNum);
        const imgElement = document.getElementById(`item${index + 1}`);

        imgElement.src = selectedObject.image;
        imgElement.alt = selectedObject.name;
    });
};

// Create a function to encapsulate the build generation logic
const generateBuild = () => {
    const selectedItems = select();
    displaySelected(selectedItems);
};

document.getElementById("submitButton").addEventListener("click", generateBuild);
document.getElementById("randomButton").addEventListener("click", generateBuild);




//push the 5x selected objects into a new array to be put into the HTML

//create a list/array containing all of the possible boots to draw from

//create a function that pulls 1x boot type from the list 

// push the random boot type into the HTML

//link images to all items in the array so that images are displayed on the HTML, and not the name of the item