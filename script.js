// document.getElementById("bmi-form").addEventListener('submit', function(e)
// {
//     e.preventDefault();
function Calculate() {
    const gender = document.getElementById('gender').value;
    const age = parseInt(document.getElementById('age').value);
    const heightfeet = parseInt(document.getElementById('height-feet').value);
    const heightinches = parseInt(document.getElementById('height-inches').value);
    const weight = parseInt(document.getElementById('weight').value);


    if (gender && age && heightfeet && heightinches && weight) {
        const heightmeter = ((heightfeet * 12) + heightinches) * 0.0254; //changing feet and icnhes into meter
        const bmi = weight / (heightmeter * heightmeter);
        console.log(bmi);
        const result = document.getElementById("result");
        result.innerText = bmi;

    }
}