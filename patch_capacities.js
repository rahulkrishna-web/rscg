const fs = require('fs');
const file = 'app/grain-storage-handling/[slug]/page.tsx';
let content = fs.readFileSync(file, 'utf8');

const target = `        {/* Available Capacities */}
        <div className="space-y-12 mb-16">
          {product.capacitySections.map((section, sIdx) => (
            <div key={sIdx}>
              <div className="mb-6">
                <h2 className="text-2xl font-black text-[#0B1510] mb-2">{section.title}</h2>
                <p className="text-slate-500">Select your required model capacity to add to your enquiry quote list.</p>
              </div>

              <div className="space-y-4">
                {section.items.map((cap, idx) => (`;

const replacement = `        {/* Available Capacities */}
        <div className="space-y-6 mb-16">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-slate-100">
            <div>
              <h2 className="text-2xl font-black text-[#0B1510] mb-2">Available Capacities</h2>
              <p className="text-sm text-slate-500">Select your required material line and model capacity to add to your quote enquiry.</p>
            </div>
            
            {product.capacitySections.length > 1 && (
              <div className="flex p-1 bg-slate-50 rounded-lg border border-slate-200 self-stretch md:self-auto shrink-0 overflow-x-auto">
                {product.capacitySections.map((section, idx) => {
                   let shortTitle = section.title.replace(/Available\\s+capacities\\s+in\\s+/i, '').replace(/Available\\s+/i, '');
                   if (shortTitle.includes("Mild-Steel") && !shortTitle.includes("(MS)")) shortTitle = shortTitle.replace("Mild-Steel Models", "Mild-Steel Models (MS)");
                   if (shortTitle.includes("Stainless-Steel") && !shortTitle.includes("(SS)")) shortTitle = shortTitle.replace("Stainless-Steel Models", "Stainless-Steel Models (SS)");
                   return (
                  <button
                    key={idx}
                    onClick={() => setActiveTab(idx)}
                    className={\`flex-1 md:flex-none whitespace-nowrap px-4 py-2 text-xs md:text-sm font-bold rounded-md transition-all duration-200 \${activeTab === idx ? 'bg-[#0B1510] text-white shadow-sm' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'}\`}
                  >
                    {shortTitle}
                  </button>
                )})}
              </div>
            )}
            {product.capacitySections.length === 1 && (
              <h3 className="text-lg font-bold text-slate-700">{product.capacitySections[0].title}</h3>
            )}
          </div>
          
          <div className="space-y-4">
            {product.capacitySections[activeTab]?.items.map((cap, idx) => (`

content = content.replace(target, replacement);

const targetEnd = `                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>`;

const replacementEnd = `                  </div>
                ))}
              </div>
        </div>`;

content = content.replace(targetEnd, replacementEnd);
fs.writeFileSync(file, content);
console.log('patched');
