CREATE OR REPLACE FUNCTION public.motivos_get3(motivo_cod integer DEFAULT -1)
  
	RETURNS TABLE(motivo integer, des_motivo text, estado text, tipo text) AS

$BODY$

DECLARE
	_wher varchar(50);
	_sql varchar(200);
BEGIN
	_sql :=  'SELECT * from motivos_es_gt';
	IF motivo_cod is null OR motivo_cod =-1 THEN
		_wher := '';
	ELSE
		_wher := ' where motivo=' || motivo_cod || ' ORDER BY 2 ';
		raise notice '%',_wher ;
	END IF;

	RAISE NOTICE  'Ejecución % % ',_sql,_wher;
	RETURN QUERY EXECUTE _sql || _wher;
END
$BODY$
  LANGUAGE plpgsql VOLATILE
  COST 100
  ROWS 1000;
ALTER FUNCTION public.motivos_get3(integer)

OWNER TO root;