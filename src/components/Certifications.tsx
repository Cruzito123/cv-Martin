import React from 'react';
import { Award, CheckCircle2} from 'lucide-react';
import { motion } from 'framer-motion';

const Certifications: React.FC = () => {
  return (
    <section className="py-16 px-6 max-w-6xl mx-auto">
      <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
        
        {/* Decoración de fondo */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -z-10"></div>

        <div className="flex flex-col md:flex-row gap-12 items-center">
          
          {/* Columna del Logro Principal (CISCO) */}
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-6">
              <Award className="text-blue-500" size={32} />
              <h2 className="text-3xl font-bold text-white tracking-tight">Certificaciones</h2>
            </div>

            <motion.div 
              whileHover={{ x: 10 }}
              className="p-6 bg-blue-500/5 border-l-4 border-blue-500 rounded-r-xl mb-8"
            >
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                CCNA: Introduction to Networks
              </h3>
              <p className="text-blue-400 font-mono text-sm mt-1">Cisco Networking Academy</p>
              <p className="text-slate-400 mt-3 text-sm leading-relaxed">
                Dominio de arquitecturas de red, protocolos TCP/IP, routing, switching y fundamentos de seguridad en infraestructuras.
              </p>
            </motion.div>

            {/* Certificación en Progreso (MICROSOFT) */}
            <div className="flex items-start gap-4 p-4 rounded-xl border border-dashed border-slate-700">
              <div className="mt-1">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-ping"></div>
              </div>
              <div>
                <h4 className="text-slate-200 font-semibold italic">Microsoft Cybersecurity (En curso)</h4>
                <p className="text-slate-500 text-xs mt-1 font-mono uppercase">Especialización en Seguridad Defensiva y Protección de Datos</p>
              </div>
            </div>
          </div>

          {/* Columna de Detalles Técnicos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full md:w-auto">
             <div className="flex items-center gap-2 text-slate-400 text-sm font-mono">
                <CheckCircle2 size={16} className="text-blue-500" />
                VLAN Management
             </div>
             <div className="flex items-center gap-2 text-slate-400 text-sm font-mono">
                <CheckCircle2 size={16} className="text-blue-500" />
                Subnetting IPv4/IPv6
             </div>
             <div className="flex items-center gap-2 text-slate-400 text-sm font-mono">
                <CheckCircle2 size={16} className="text-blue-500" />
                Network Security
             </div>
             <div className="flex items-center gap-2 text-slate-400 text-sm font-mono">
                <CheckCircle2 size={16} className="text-blue-500" />
                Packet Tracer Expert
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Certifications;