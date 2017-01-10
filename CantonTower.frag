#version 400 compatibility

in vec3 vNs;
in vec3 vLs;
in vec3 vEs;
in vec3 vMCposition;

const vec4 PINK  	= vec4( 0.804, 0.416, 0.925, 1. );
const vec4 LPURPLE	= vec4( 0.765, 0.451, 0.906, 1. );
const vec4 PURPLE	= vec4( 0.525, 0.180, 0.753, 1. );
const vec4 RED		= vec4( 1.000, 0.000, 0.000, 1. );
const vec4 ORANGE	= vec4( 1.000, 0.500, 0.000, 1. );
const vec4 YELLOW	= vec4( 1.000, 1.000, 0.000, 1. );
const vec4 GREEN	= vec4( 0.000, 1.000, 0.000, 1. );
const vec4 LBLUE	= vec4( 0.000, 1.000, 1.000, 1. );
const vec4 BLUE		= vec4( 0.000, 0.000, 1.000, 1. );
const vec4 DBLUE    = vec4( 0.400, 0.247, 0.788, 1. );
const vec4 WHITE    = vec4( 1.000, 1.000, 1.000, 1. );

uniform float uKa, uKd, uKs, uShininess, uAngleX, uAngleY, uAngleZ;

void
main( )
{	
	float t;
	vec4 vColor;
	vec3 pos = vec3(vMCposition.x,vMCposition.y,vMCposition.z);
	vec3 NAngle = vec3(uAngleX, uAngleY, uAngleZ);

	float PinkHeight    = 35.;
	float RedHeight     = 37.;
	float OrangeHeight  = 57.;
	float YellowHeight  = 71.;
	float GreenHeight   = 75.;
	float LblueHeight   = 90.;
	float BlueHeight    = 100.;
	float DblueHeight   = 110.;
	float LpurpleHeight = 130.;
	float PurpleHeight  = 180.;

	vec3 PinkCenter    = vec3(0., 0., PinkHeight);
	vec3 RedCenter     = vec3(0., 0., RedHeight);
	vec3 OrangeCenter  = vec3(0., 0., OrangeHeight);
	vec3 YellowCenter  = vec3(0., 0., YellowHeight);
	vec3 GreenCenter   = vec3(0., 0., GreenHeight);
	vec3 LblueCenter   = vec3(0., 0., LblueHeight);
	vec3 BlueCenter    = vec3(0., 0., BlueHeight);
	vec3 DblueCenter   = vec3(0., 0., DblueHeight);
	vec3 LpurpleCenter = vec3(0., 0., LpurpleHeight);
	vec3 PurpleCenter  = vec3(0., 0., PurpleHeight);

	vec3 PinkVector    = PinkCenter - pos;
	vec3 RedVector     = RedCenter - pos;
	vec3 OrangeVector  = OrangeCenter - pos;
	vec3 YellowVector  = YellowCenter - pos;
	vec3 GreenVector   = GreenCenter - pos;
	vec3 LblueVector   = LblueCenter - pos;
	vec3 BlueVector    = BlueCenter - pos;
	vec3 DblueVector   = DblueCenter - pos;
	vec3 LpurpleVector = LpurpleCenter - pos;
	vec3 PurpleVector  = PurpleCenter - pos;

	float dPink    = abs(dot(NAngle, -PinkVector))/length(NAngle);
	float dRed     = abs(dot(NAngle, -RedVector))/length(NAngle);
	float dOrange  = abs(dot(NAngle, -OrangeVector))/length(NAngle);
	float dYellow  = abs(dot(NAngle, -YellowVector))/length(NAngle);
	float dGreen   = abs(dot(NAngle, -GreenVector))/length(NAngle);
	float dLblue   = abs(dot(NAngle, -LblueVector))/length(NAngle);
	float dBlue    = abs(dot(NAngle, -BlueVector))/length(NAngle);
	float dDblue   = abs(dot(NAngle, -DblueVector))/length(NAngle);
	float dLpurple = abs(dot(NAngle, -LpurpleVector))/length(NAngle);
	float dPurple  = abs(dot(NAngle, -PurpleVector))/length(NAngle);

	float PinkResult    = dot(normalize(PinkVector), normalize(NAngle));
	float RedResult     = dot(normalize(RedVector), normalize(NAngle));
	float OrangeResult  = dot(normalize(OrangeVector), normalize(NAngle));
	float YellowResult  = dot(normalize(YellowVector), normalize(NAngle));
	float GreenResult   = dot(normalize(GreenVector), normalize(NAngle));
	float LblueResult   = dot(normalize(LblueVector), normalize(NAngle));
	float BlueResult    = dot(normalize(BlueVector), normalize(NAngle));
	float DblueResult    = dot(normalize(DblueVector), normalize(NAngle));
	float LpurpleResult = dot(normalize(LpurpleVector), normalize(NAngle));
	float PurpleResult  = dot(normalize(PurpleVector), normalize(NAngle));

	
	if ( PinkResult >= 0. )
	{
		t = (PinkHeight - dPink) / PinkHeight;
		vColor = mix(PINK, RED,t );
		//vColor = PINK;
	}
	else if ( RedResult >= 0. )
	{
		t = ((RedHeight - PinkHeight ) - dRed) / ( RedHeight - PinkHeight);
		vColor = mix(RED, ORANGE,t );
		//vColor = RED;
	}
	else if( OrangeResult >= 0. )
	{
		t = ((OrangeHeight - RedHeight) - dOrange) / (OrangeHeight - RedHeight);
		vColor = mix(ORANGE, YELLOW, t );
		//vColor = ORANGE;
	}

	else if( YellowResult >= 0. )
	{
		t = ((YellowHeight - OrangeHeight) - dYellow) / (YellowHeight - OrangeHeight);
		vColor = mix(YELLOW, GREEN, t );
		//vColor = YELLOW;
	}
	else if( GreenResult >= 0. )
	{
		t = ((GreenHeight - YellowHeight) - dGreen) / (GreenHeight - YellowHeight);
		vColor = mix(GREEN, LBLUE, t );
		//vColor = GREEN;
	}
	else if( LblueResult >= 0. )
	{
		t = ((LblueHeight - GreenHeight) - dLblue ) / (LblueHeight - GreenHeight);
		vColor = mix(LBLUE, BLUE, t );
		//vColor = LBLUE;
	}
	else if( BlueResult >= 0. )
	{
		t = ((BlueHeight - LblueHeight) - dBlue) /(BlueHeight - LblueHeight);
		vColor = mix(BLUE, DBLUE, t );
		//vColor = BLUE;
	}
	else if( DblueResult >= 0. )
	{
		t = ((DblueHeight - BlueHeight) - dDblue) / (DblueHeight - BlueHeight);
		vColor = mix(DBLUE, LPURPLE, t );
		//vColor = DBLUE;
	}
	else if( LpurpleResult >= 0. )
	{
		t = ((LpurpleHeight - DblueHeight) - dLpurple) / (LpurpleHeight - DblueHeight);
		vColor = mix(LPURPLE, PURPLE, t );
		//vColor = LPURPLE;
	}
	else if(  PurpleResult >= 0. )
	{
		vColor = PURPLE;
	}

	vec3 Normal = normalize(vNs);
	vec3 Light = normalize(vLs);
	vec3 Eye = normalize(vEs);

	vec4 ambient = uKa * vColor;
	float d = max( dot(Normal,Light), 0. );

	vec4 diffuse = uKd * d * vColor;
	float s = 0.;

	if( dot(Normal,Light) > 0. ) // only do specular if the light can see the point
	{
		vec3 ref = normalize( 2. * Normal * dot(Normal,Light) - Light );
		s = pow( max( dot(Eye,ref),0. ), uShininess );
	}
	
	vec4 specular = uKs * s * WHITE;
	gl_FragColor = vec4( ambient.rgb + diffuse.rgb + specular.rgb, 1. );
}