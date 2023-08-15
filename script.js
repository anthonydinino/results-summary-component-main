import data from "./data.json" assert { type: "json" };

const reactionImg = document.querySelector("#reaction > .stat-heading > img");
const reactionText = document.querySelector("#reaction > .stat-heading > p");
const reactionValue = document.querySelector("#reaction > .stat-number");
reactionImg.src = data[0]["icon"];
reactionText.textContent = data[0]["category"];
reactionValue.innerHTML = `${data[0]["score"]}  <span>/ 100<span/>`;

const memoryImg = document.querySelector("#memory > .stat-heading > img");
const memoryText = document.querySelector("#memory > .stat-heading > p");
const memoryValue = document.querySelector("#memory > .stat-number");
memoryImg.src = data[1]["icon"];
memoryText.textContent = data[1]["category"];
memoryValue.innerHTML = `${data[1]["score"]}  <span>/ 100<span/>`;

const verbalImg = document.querySelector("#verbal > .stat-heading > img");
const verbalText = document.querySelector("#verbal > .stat-heading > p");
const verbalValue = document.querySelector("#verbal > .stat-number");
verbalImg.src = data[2]["icon"];
verbalText.textContent = data[2]["category"];
verbalValue.innerHTML = `${data[2]["score"]}  <span>/ 100<span/>`;

const visualImg = document.querySelector("#visual > .stat-heading > img");
const visualText = document.querySelector("#visual > .stat-heading > p");
const visualValue = document.querySelector("#visual > .stat-number");
visualImg.src = data[3]["icon"];
visualText.textContent = data[3]["category"];
visualValue.innerHTML = `${data[3]["score"]}  <span>/ 100<span/>`;

const score = document.querySelector(".score");
let avgScore = 0;
data.forEach((stat) => {
    avgScore += parseInt(stat.score);
});
score.textContent = parseInt(avgScore / data.length);
