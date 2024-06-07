import { query } from '../../lib/db';

export default async function handler(req, res) {
  try {
    const results = await query(`
      SELECT 
        p.pais,
        (d.2018 - d.2017) AS incremento_personas,
        ROUND((((d.2018 - d.2017) / d.2017) * 100), 2) AS incremento_porcentual
      FROM 
        datos d
      JOIN 
        paises p ON d.codigo = p.codigo
      WHERE 
        d.2017 IS NOT NULL 
        AND d.2018 IS NOT NULL 
        AND d.2018 > d.2017
      ORDER BY 
        incremento_porcentual DESC
    `);
    res.status(200).json(results);
  } catch (error) {
    console.error('Database query error:', error);
    res.status(500).json({ message: 'Database query error' });
  }
}
