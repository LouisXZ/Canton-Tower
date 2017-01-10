#version 400 compatibility

out vec3 vNs;
out vec3 vLs;
out vec3 vEs;
out vec3 vMCposition;

uniform float uLightX, uLightY, uLightZ, uA, uB, uT;
vec3 eyeLightPosition = vec3( uLightX, uLightY, uLightZ );

void
main( )
{	
	vec3 ECposition = vec3( gl_ModelViewMatrix * gl_Vertex );
	vNs = normalize( gl_NormalMatrix * gl_Normal );
	vLs = eyeLightPosition - ECposition.xyz; 
	vEs = vec3( 0., 0., 0. ) - ECposition.xyz; 
	gl_Position = gl_ModelViewProjectionMatrix * gl_Vertex;

	vMCposition = gl_Vertex.xyz;
}
