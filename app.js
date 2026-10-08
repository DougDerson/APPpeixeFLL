const especies=[{nome:"Dourado",d:"Salminus brasiliensis"},{nome:"Pacu",d:"Piaractus mesopotamicus"},{nome:"Pintado",d:"Pseudoplatystoma corruscans"},{nome:"Piraputanga",d:"Brycon hilarii"},{nome:"Jaú",d:"Zungaro jahu"}];
photo.onchange=e=>{preview.src=URL.createObjectURL(e.target.files[0]);preview.style.display='block';}
function identificar(){let i=Math.floor(Math.random()*especies.length);result.innerHTML=`<h2>${especies[i].nome}</h2><p>${especies[i].d}</p><p>Protótipo: substitua por TensorFlow.js + modelo treinado.</p>`;}
