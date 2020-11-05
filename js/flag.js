


const section = document.querySelector("section.flag")

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, section.clientWidth / section.clientHeight, 0.1, 1000 );


const renderer = new THREE.WebGLRenderer({
	alpha: true,
	antialias: true
});
renderer.setSize( section.clientWidth, section.clientHeight );
section.appendChild( renderer.domElement );

const loader = new THREE.TextureLoader()
loader.crossOrigin='';

//texture to use
var arr=[
	'../images/smog.png','../images/NJP.jpg','../images/slou.jpg'
];

var textureToShow=0;

const material = new THREE.MeshBasicMaterial();
const geometry = new THREE.PlaneGeometry(3,4,50,30);
const flag = new THREE.Mesh( geometry, material );
flag.rotation.set(-0.1,0,0)


//load the texture
loader.load(arr[textureToShow],function(tex){
	material.map=tex;
	textureToShow++;
	scene.add(flag);
});

//click interaction
var click_event=document.getElementsByClassName("click_btn")[0];
click_event.addEventListener("click",function(){

	loader.load(arr[textureToShow],function(tex){
		material.map=tex;
		textureToShow++;
		if(textureToShow>arr.length-1){
			
			textureToShow=0;
		}
	});
	
	
	
});

flag.rotation.set(-0.1,0,0)

camera.position.z = 5;

const clock = new THREE.Clock()

function animate() {
	const t=clock.getElapsedTime()
	
	flag.geometry.vertices.map(v => {
		const waveY1= 0.75 * Math.sin(v.y*2+t*3)
		const waveY2= 0.25 * Math.sin(v.y*3+t*2)
		const waveX1= 0.1 * Math.sin(v.x*5+t*0.5)
		const multi = (v.y-2.5)/5

		v.z=(waveY1+waveY2+waveX1)*multi
	})

	flag.geometry.verticesNeedUpdate=true

	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}
animate();

window.addEventListener("resize",function(){
	camera.aspect=section.clientWidth / section.clientHeight
	camera.updateProjectionMatrix()

	renderer.setSize(section.clientWidth, section.clientHeight);
});

