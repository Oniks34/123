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
			name: "Intel Core i7-10700K, 3.8GHz, 16 MB",
			price: 1749,
			img:"Intel_1.jpg",
	},
	{
			id:2,
			name: "Intel Core i5-10400F, 2.9GHz, 12 MB",
			price: 699,
			img:"i-5.jpg",
	},
	{
			id:3,
			name: "Intel Core i9-10850K, 3.6GHz, 20 MB",
			price: 2189,
			img:"I-9.jpg",
	},
]
const ram = [
	{
			id:1,
			name: "HyperX Predator RGB, DDR4, 16 GB, 4000MHz, CL19",
			price: 671,
			img:"HYP-P.jpeg",
	},
	{
			id:2,
			name: "G.Skill TridentX, DDR3, 16 GB, 2400MHz, CL10",
			price: 539,
			img:"g-skill.jpg",
	},
	{
			id:3,
			name: "G.Skill Flare X, DDR4, 16 GB, 3200MHz, CL14",
			price: 469,
			img:"g-skill-2.jpg",
	},
]
const power = [
	{
			id:1,
			name: "be quiet! Straight Power 11 750W",
			price: 578,
			img:"BE_QUIET_STRAIGHT_POWER_11_09.jpg",
			typ:"ATX"
	},
	{
			id:2,
			name: "Corsair RM750x 750W",
			price: 619,
			img:"zasilacz-corsair-rm750x.jpg",
			typ:"ATX"
	},
	{
			id:3,
			name: "Corsair RM1000i 1000W Gold Series",
			price: 900,
			img:"morele-neeeeet.jpg",
			typ:"ATX"
	},
]
const ssd = [
	{
		id:1,
		name: "SSD Western Digital Blue 500 GB 2.5 SATA III",
		price: 279,
		img:"ssd1.jpg",
	},
	{
		id:2,
		name: "SSD Samsung 870 QVO 8 TB 2.5 SATA III",
		price: 3699,
		img:"ssd2.jpg",
	},
	{
		id:3,
		name: "Dysk SSD Samsung 860 EVO 1 TB 2.5'' SATA III",
		price: 619,
		img:"ssd3.jpg",
	},
]
const box = [
	{
			id:1,
			name: "SilentiumPC Signum SG7V TG",
			price: 329,
			typ: "ATX / Thin Mini-ITX / Micro ATX (uATX)",
			img:"spc-1.jpg",
	},
	{
			id:2,
			name: "Genesis Irid 400 ARGB",
			price: 359,
			typ: "Mini ITX / ATX / Micro ATX (uATX)",
			img:"genesisirid400rgb-640x360.jpg",
	},
	{
			id:3,
			name: "MSI MAG Forge 100M",
			price: 209,
			typ: "Mini ITX / ATX / Micro ATX (uATX)",
			img:"msi-mag-forge-100m-4.jpg",
	},
]
const monitor = [
	{
		id:1,
		name: "Samsung C49RG90",
		price: 5499,
		img:"Samsung-C49RG90.jpg",
	},
	{
		id:2,
		name: "AOC C24G1",
		price: 849,
		img:"AOC-C24G1.jpg",
	},
	{
		id:3,
		name: "Acer ED242QRAbidpx",
		price: 668,
		img:"Monitor-Acer-ED242QRAbidpx.jpg",
	},
]
const headphones = [
	{
		id:1,
		name: "Tracer 7.1 Hydra",
		price: 100,
		img:"Hydra.jpeg",
	},
	{
		id:2,
		name: "Hiro Psi",
		price: 120,
		img:"PSI.jpg",
	},
	{
		id:3,
		name: "AKG K712",
		price: 1074,
		img:"AKG-K712.jpeg",
	},
]
const hdd = [
	{
		id:1,
		name: "Toshiba 4 TB 3.5 SATA III X300",
		price: 599,
		img:"Toshiba.jpeg",
	},
	{
		id:2,
		name: "Seagate Barracuda Pro 1 TB 2.5 SATA III",
		price: 294,
		img:"Seagate.jpg",
	},
	{
		id:3,
		name: "Western Digital He12 12 TB 3.5 SATA III",
		price: 2370,
		img:"Western.jpg",
	},
]
const ups = [
	{
		id:1,
		name: "CyberPower UT1050EG-FR",
		price: 419,
		img:"ups1.jpg",
	},
	{
		id:2,
		name: "PowerWalker VI 800 SW FR",
		price: 418,
		img:"ups-2.jpg",
	},
	{
		id:3,
		name: "APC Smart SRT",
		price: 27456,
		img:"ups-3.jpg",
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
	{
		name: 'ssd',
		price:0
	},
	{
		name: 'monitor',
		price:0
	},
	{
		name: 'headphones',
		price:0
	},
	{
		name: 'hdd',
		price:0
	},
	{
		name: 'ups',
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
		summaryCPU.innerHTML = "<td><img src='img/"+cpu[strAtt-1].img+"'></td><td>"+cpu[strAtt-1].name+"</td><td></td><td><b>cena: "+cpu[strAtt-1].price+" PLN</b></td>";
		cart[2].price = cpu[strAtt - 1].price
		cart[2].name = cpu[strAtt - 1].name
	}
	else if (SelectId == "mb"){
		summaryMB.innerHTML = "<td><img src='img/"+mb[strAtt-1].img+"'></td><td>"+mb[strAtt-1].name+"</td><td>"+mb[strAtt-1].typ+"</td><td><b>cena: "+mb[strAtt-1].price+" PLN</b></td>";
		cart[0].price = mb[strAtt - 1].price
		cart[0].name = mb[strAtt - 1].name
	}
	else if (SelectId == "gpu"){
		summaryGFX.innerHTML = "<td><img src='img/"+gpu[strAtt-1].img+"'></td><td>"+gpu[strAtt-1].name+"</td><td></td><td><b>cena: "+gpu[strAtt-1].price+" PLN</b></td>";
		cart[1].price = gpu[strAtt - 1].price
		cart[1].name = gpu[strAtt - 1].name
	}
	else if (SelectId == "ram"){
		summaryRAM.innerHTML = "<td><img src='img/"+ram[strAtt-1].img+"'></td><td>"+ram[strAtt-1].name+"</td><td></td><td><b>cena: "+ram[strAtt-1].price+" PLN</b></td>";
		cart[3].price = ram[strAtt - 1].price
		cart[3].name = ram[strAtt - 1].name
	}
	else if (SelectId == "power"){
		summaryPOWER.innerHTML = "<td><img src='img/"+power[strAtt-1].img+"'></td><td>"+power[strAtt-1].name+"</td><td>"+power[strAtt-1].typ+"</td><td><b>cena: "+power[strAtt-1].price+" PLN</b></td>";
		cart[4].price = power[strAtt - 1].price
		cart[4].name = power[strAtt - 1].name
	}
	else if (SelectId == "box"){
		summaryBOX.innerHTML = "<td><img src='img/"+box[strAtt-1].img+"'></td><td>"+box[strAtt-1].name+"</td><td>"+box[strAtt-1].typ+"</td><td><b>cena: "+box[strAtt-1].price+" PLN</b></td>";
		cart[5].price = box[strAtt - 1].price
		cart[5].name = box[strAtt - 1].name
	}
	else if (SelectId == "ssd"){
		summarySSD.innerHTML = "<td><img src='img/"+ssd[strAtt-1].img+"'></td><td>"+ssd[strAtt-1].name+"</td><td></td><td><b>cena: "+ssd[strAtt-1].price+" PLN</b></td>";
		cart[6].price = ssd[strAtt - 1].price
		cart[6].name = ssd[strAtt - 1].name
	}
	else if (SelectId == "monitor"){
		summaryMonitor.innerHTML = "<td><img src='img/"+monitor[strAtt-1].img+"'></td><td>"+monitor[strAtt-1].name+"</td><td></td><td><b>cena: "+monitor[strAtt-1].price+" PLN</b></td>";
		cart[7].price = monitor[strAtt - 1].price
		cart[7].name = monitor[strAtt - 1].name
	}
	else if (SelectId == "headphones"){
		summaryHeadphones.innerHTML = "<td><img src='img/"+headphones[strAtt-1].img+"'></td><td>"+headphones[strAtt-1].name+"</td><td></td><td><b>cena: "+headphones[strAtt-1].price+" PLN</b></td>";
		cart[8].price = headphones[strAtt - 1].price
		cart[8].name = headphones[strAtt - 1].name
	}
	else if (SelectId == "hdd"){
		summaryHDD.innerHTML = "<td><img src='img/"+hdd[strAtt-1].img+"'></td><td>"+hdd[strAtt-1].name+"</td><td></td><td><b>cena: "+hdd[strAtt-1].price+" PLN</b></td>";
		cart[9].price = hdd[strAtt - 1].price
		cart[9].name = hdd[strAtt - 1].name
	}
	else if (SelectId == "ups"){
		summaryUPS.innerHTML = "<td><img src='img/"+ups[strAtt-1].img+"'></td><td>"+ups[strAtt-1].name+"</td><td></td><td><b>cena: "+ups[strAtt-1].price+" PLN</b></td>";
		cart[9].price = ups[strAtt - 1].price
		cart[9].name = ups[strAtt - 1].name
	}
	else
	{}
	document.getElementById("sumAll").innerHTML="<b>Suma koszyka:"+ (cart[0].price+cart[1].price+cart[2].price+cart[3].price+cart[4].price+cart[5].price+cart[6].price+cart[7].price+cart[8].price+cart[9].price+cart[10].price)+" PLN</b>"
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
for(let i=0; i<ssd.length; i++){
	addOpt("ssd", ssd[i].id, ssd[i].name)
}
for(let i=0; i<monitor.length; i++){
	addOpt("monitor", monitor[i].id, monitor[i].name)
}
for(let i=0; i<headphones.length; i++){
	addOpt("headphones", headphones[i].id, headphones[i].name)
}
for(let i=0; i<hdd.length; i++){
	addOpt("hdd", hdd[i].id, hdd[i].name)
}
for(let i=0; i<ups.length; i++){
	addOpt("ups", ups[i].id, ups[i].name)
}

