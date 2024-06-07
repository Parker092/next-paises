import { query } from '../../lib/db';

export default async function handler(req, res) {
  try {
    const results = await query(`
      SELECT 
        p.pais,
        (d.2000 - d.2010) AS decremento_personas,
        ROUND(((d.2000 - d.2010) / d.2000) * 100, 2) AS decremento_porcentual
      FROM 
        datos d
      JOIN 
        paises p ON d.codigo = p.codigo
      WHERE 
        d.2000 IS NOT NULL 
        AND d.2010 IS NOT NULL 
        AND d.2000 > d.2010
      ORDER BY 
        decremento_personas DESC
    `);
    res.status(200).json(results);
  } catch (error) {
    console.error('Database query error:', error);
    res.status(500).json({ message: 'Database query error' });
  }
}
