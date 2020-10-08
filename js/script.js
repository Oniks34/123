const gpu = [
	{
			id:1,
			name: "PNY Technologies Quadro RTX 8000 48GB GDDR6",
			price: 32868,
			img:"Quadro _RTX_8000_48GB_GDDR6.jpeg",
	},
	{
			id:2,
			name: "NVIDIA GeForce RTX Titan 24GB GDDR6",
			price: 12749,
			img:"GeForce _RTX _Titan_24GB_GDDR6.jpg",
	},
	{
			id:3,
			name: "MSI GeForce RTX 2080Ti Gaming X Trio 11GB GDDR6",
			price: 5696,
			img:"GeForce_RTX_2080Ti_Gaming_X_Trio_11GB_GDDR6.jpg",
	},
]
const mb = [
	{
			id:1,
			name: "MSI MEG X570 ACE",
			price: 1699,
			typ: "ATX",
			img:"MSI-MEG-X570-ACE.jpeg",
	},
	{
			id:2,
			name: "Asus ROG STRIX Z490-I GAMING",
			price: 1359,
			typ: "Mini ITX",
			img:"Asus_ROG_STRIX _Z490-I _GAMING.jpg",
	},
	{
			id:3,
			name: "Gigabyte Z490 VISION D",
			price: 1559,
			typ: "ATX",
			img:"Gigabyte-Z490-VISION-D.jpg",
	},
]
const cpu = [
	{
			id:1,
			name: "Procesor Intel Core i7-10700K, 3.8GHz, 16 MB",
			price: 1749,
			img:"",
	},
	{
			id:2,
			name: "Procesor Intel Core i5-10400F, 2.9GHz, 12 MB",
			price: 699,
			img:"",
	},
	{
			id:3,
			name: "Procesor Intel Core i9-10850K, 3.6GHz, 20 MB",
			price: 2189,
			img:"",
	},
]
const ram = [
	{
			id:1,
			name: "Pamięć HyperX Predator RGB, DDR4, 16 GB, 4000MHz, CL19",
			price: 671,
			img:"",
	},
	{
			id:2,
			name: "Pamięć G.Skill TridentX, DDR3, 16 GB, 2400MHz, CL10",
			price: 539,
			img:"",
	},
	{
			id:3,
			name: "Pamięć G.Skill Flare X, DDR4, 16 GB, 3200MHz, CL14",
			price: 469,
			img:"",
	},
]
const power = [
	{
			id:1,
			name: "Zasilacz be quiet! Straight Power 11 750W",
			price: 578,
			img:"",
	},
	{
			id:2,
			name: "Zasilacz Corsair RM750x 750W",
			price: 619,
			img:"",
	},
	{
			id:3,
			name: "Zasilacz Corsair RM1000i 1000W Gold Series",
			price: 900,
			img:"",
	},
]
const box = [
	{
			id:1,
			name: "Obudowa SilentiumPC Signum SG7V TG",
			price: 329,
			typ: "ATX / Thin Mini-ITX / Micro ATX (uATX)",
			img:"",
	},
	{
			id:2,
			name: "Obudowa Genesis Irid 400 ARGB",
			price: 359,
			typ: "Mini ITX / ATX / Micro ATX (uATX)",
			img:"",
	},
	{
			id:3,
			name: "Obudowa MSI MAG Forge 100M",
			price: 209,
			typ: "Mini ITX / ATX / Micro ATX (uATX)",
			img:"",
	},
]
var cart = [
	{
		name: 'mainboard',
		price:0
	},
	{
		name: 'graphic card',
		price:0
	},
	{
		name: 'processor',
		price:0
	},
	{
		name: 'pamięć ram',
		price:0
	},
	{
		name: 'zasilacz',
		price:0
	},
		{
		name: 'obudowa',
		price:0
	},
]

function addOpt(elem, optValue, textOpt){
	let select1 = document.getElementById(elem);
	option = document.createElement("option");
	option.setAttribute("value", optValue);
	const textOption = document.createTextNode(textOpt);
	option.appendChild(textOption);
	select1.appendChild(option);
	}
function SelectedItemValue(SelectId){
	const selectedItem = document.getElementById(SelectId)
	let strAtt = selectedItem.options[selectedItem.selectedIndex].getAttribute('value');
	console.log("Wybrany element ma ID: "+strAtt);
	const summaryCPU = document.getElementById("summaryCPU");
	const summaryMB = document.getElementById("summaryMB");
	const summaryGFX = document.getElementById("summaryGFX");
	if (SelectId == "cpu"){
		summaryCPU.innerHTML = "<td><img src='img/"+cpu[strAtt-1].img+"'></td><td>"+cpu[strAtt-1].name+"</td><td><b>cena: "+cpu[strAtt-1].price+" zł</b></td>";
		cart[2].price = cpu[strAtt - 1].price
		cart[2].name = cpu[strAtt - 1].name
	}
	else if (SelectId == "mb"){
		summaryMB.innerHTML = "<td><img src='img/"+mb[strAtt-1].img+"'></td><td>"+mb[strAtt-1].name+"</td><td><b>cena: "+mb[strAtt-1].price+" zł</b></td>";
		cart[0].price = mb[strAtt - 1].price
		cart[0].name = mb[strAtt - 1].name
	}
	else if (SelectId == "gpu"){
		summaryGFX.innerHTML = "<td><img src='img/"+gpu[strAtt-1].img+"'></td><td>"+gpu[strAtt-1].name+"</td><td><b>cena: "+gpu[strAtt-1].price+" zł</b></td>";
		cart[1].price = gpu[strAtt - 1].price
		cart[1].name = gpu[strAtt - 1].name
	}
	else if (SelectId == "ram"){
		summaryRAM.innerHTML = "<td><img src='img/"+ram[strAtt-1].img+"'></td><td>"+ram[strAtt-1].name+"</td><td><b>cena: "+ram[strAtt-1].price+" zł</b></td>";
		cart[3].price = ram[strAtt - 1].price
		cart[3].name = ram[strAtt - 1].name
	}
	else if (SelectId == "power"){
		summaryPOWER.innerHTML = "<td><img src='img/"+power[strAtt-1].img+"'></td><td>"+power[strAtt-1].name+"</td><td><b>cena: "+power[strAtt-1].price+" zł</b></td>";
		cart[4].price = power[strAtt - 1].price
		cart[4].name = power[strAtt - 1].name
	}
	else if (SelectId == "box"){
		summaryBOX.innerHTML = "<td><img src='img/"+box[strAtt-1].img+"'></td><td>"+box[strAtt-1].name+"</td><td><b>cena: "+box[strAtt-1].price+" zł</b></td>";
		cart[5].price = box[strAtt - 1].price
		cart[5].name = box[strAtt - 1].name
	}
	else
	{}
	document.getElementById("sumAll").innerHTML="<b>Suma koszyka:"+ (cart[0].price+cart[1].price+cart[2].price+cart[3].price+cart[4].price+cart[5].price)+" zł</b>"
}
for(let i=0; i<mb.length; i++){
	addOpt("mb", mb[i].id, mb[i].name,)
	}
for(let i=0; i<gpu.length; i++){
	addOpt("gpu", gpu[i].id, gpu[i].name)
	}
for(let i=0; i<cpu.length; i++){
	addOpt("cpu", cpu[i].id, cpu[i].name)
	}
for(let i=0; i<ram.length; i++){
	addOpt("ram", ram[i].id, ram[i].name)
	}
for(let i=0; i<power.length; i++){
	addOpt("power", power[i].id, power[i].name)
	}
for(let i=0; i<box.length; i++){
	addOpt("box", box[i].id, box[i].name)
	}
