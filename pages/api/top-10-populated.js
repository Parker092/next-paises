import { query } from '../../lib/db';

export default async function handler(req, res) {
  try {
    const results = await query(`
      SELECT 
        p.pais, 
        d.2018 AS poblacion 
      FROM 
        datos d
      JOIN 
        paises p ON d.codigo = p.codigo 
      WHERE 
        p.codigo NOT IN (
          'UMC', 'EAR', 'WLD', 'IBD', 'IBT', 'LMC', 'LMY', 'LTE', 'MIC', 'EAP', 'TEA', 'TSA', 'IDA', 'OED', 
          'HIC', 'PST', 'IDX', 'TSS', 'SSA', 'SSF', 'PRE', 'LDC', 'SAS', 'HPC', 'LIC', 'IDB', 'FCS', 'ARB', 'MEA', 'MNA', 
          'TM', 'TLA', 'LC', 'LAC', 'ECS', 'EAS', 'EUU', 'TEC', 'ECA', 'NAC', 'EMU'
        )
      ORDER BY 
        poblacion DESC 
      LIMIT 10
    `);
    res.status(200).json(results);
  } catch (error) {
    console.error('Database query error:', error);
    res.status(500).json({ message: 'Database query error' });
  }
}
