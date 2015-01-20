function validerRegistrerFagkode(fagkode)
{
var lovligFagkode=true;
var lovligFagnavn=true;
var lovligFaglaerer=true;
 
var feilmelding="";

	if(!fagnavn)
	{
	lovligFagnavn=false;
	feilmelding="Fagnavnet må fylles ut";
	}
	
	if(!faglaerer)
	{
	lovligFaglaerer=false;
	feilmelding="Lærer må fylles ut";

	if(!fagkode)
	{
	lovligFagkode=false;
	feilmelding="Fagkoden må fylles ut";
	}
	
	else if (fagkode.length!=7)
	{
	lovligFagkode=false;
	feilmelding="Fagkoden må bestå av 7 tegn. Tre store bokstaver og fire siffre."
	}
	
	for(var i=0; i<fagkode.length; i++)
	{
		if(fagkode[0] < "A" || fagkode[0] > "Z")
		{
		lovligFagkode=false;
		feilmelding="De tre første tegnene i fagkoden må bestå av store bokstaver."
		}
		
		else if(fagkode[1] < "A" || fagkode[1] > "Z")
		{
		lovligFagkode=false;
		feilmelding="De tre første tegnene i fagkoden må bestå av store bokstaver."
		}
		
		else if(fagkode[2] < "A" || fagkode[2] > "Z")
		{
		lovligFagkode=false;
		feilmelding="De tre første tegnene i fagkoden må bestå av store bokstaver."
		}
		
		else if(fagkode[3] < 0 || fagkode[3] > 9 || fagkode[4] < 0 || fagkode[4] > 9 || fagkode[5] < 0 || fagkode[5] > 9 || fagkode[6] < 0 || fagkode[6] > 9 )
		{
		lovligFagkode=false;
		feilmelding="De fire siste tegnene i fagkoden må bestå av siffre."
		}
		
	}
	
	
	if(lovligFagkode)
	{
	return true;
	}

	else
	{
	document.getElementById("melding").innerHTML=feilmelding;
	return false;
	}

}



}