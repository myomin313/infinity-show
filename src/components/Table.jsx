import React from 'react';

export default function DifferenceConciergeSoc({ data }) {
  const colCount = data.headers.length;

  return (
    <section className="container px-6 py-8 mx-auto md:px-16">
      <div
        className="relative rounded-3xl overflow-hidden p-0.5"
        style={{ background: 'linear-gradient(to right, #F98D11, #199AE2)' }}
      >
        <div className="bg-[#111865] rounded-3xl overflow-hidden p-10">
          <div className="py-6">
            <h3 className="mb-3 text-2xl font-semibold text-white uppercase">
              {data.title}
            </h3>
          </div>

          <table className="w-full border-collapse">
            <thead>
              <tr
                className="font-semibold text-center text-white"
                style={{ background: 'linear-gradient(to right, #F98D11, #199AE2)' }}
              >
                {data.headers.map((header) => (
                  <th
                    key={header}
                    className="px-4 py-5 border border-white/20"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {data.rows.map((row, rowIdx) => (
                <tr key={rowIdx} className="text-white">
                  {data.headers.map((_, colIdx) => {
                    const key = data.headers[colIdx]
                      .toLowerCase()
                      .replace(/\s+/g, '')
                      .replace(/[^a-z]/g, '');
                    const value = row[key] ?? Object.values(row)[colIdx];

                    return (
                      <td
                        key={colIdx}
                        className="px-4 py-3 border border-[#F98D11]"
                      >
                        {colIdx === 0 ? (
                          <span className="font-semibold">{value}</span>
                        ) : (
                          value
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>

          <div className="py-4 border-t border-[#F98D11]">
            <p
              className="text-sm leading-relaxed text-white/90"
              dangerouslySetInnerHTML={{ __html: data.footer }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
