import React, { useState } from 'react';
import { AlertTriangle, CheckCircle2, Phone, Package, Flame, Shield, Clock, Radio, AlertCircle, FileText, Zap } from 'lucide-react';

import sunTank from '../../assets/sunTanks.mp4';

const Safety = () => {
  const [expandedProcedure, setExpandedProcedure] = useState(null);
  const [checkedItems, setCheckedItems] = useState([]);

  const safetyProcedures = [
    {
      id: 1,
      title: 'Pre-Operation Safety Check',
      category: 'Preparation',
      severity: 'Critical',
      icon: CheckCircle2,
      color: 'blue',
      description:
        'Essential checks before tank operation to ensure crew safety and equipment readiness. This comprehensive pre-operation checklist must be completed before engine start. All crew members must participate in verification. Any failed checks must be corrected before proceeding.',
      steps: [
        'Verify all crew members are seated and secured in designated positions with hatches closed',
        'Check internal communication systems - test intercom on all channels with each crew member',
        'Confirm all hatches open and close smoothly and seal properly with internal locking mechanisms',
        'Test fire suppression system activation and verify all indicators function correctly',
        'Verify NBC protection system filters are installed and filtration unit operates properly',
        'Inspect fuel tank level, check for leaks, and verify fuel quality',
        'Check track and suspension condition for visible damage, proper tension, and lubrication',
        'Secure all ammunition storage, verify carousel is empty, and all doors are locked',
        'Test all external lighting systems - headlights, brake lights, and navigation lights',
        'Verify engine oil level, coolant level, and hydraulic fluid reservoirs are full'
      ]
    },
    {
      id: 2,
      title: 'Fire Safety & Emergency Suppression',
      category: 'Emergency Response',
      severity: 'Critical',
      icon: Flame,
      color: 'red',
      description:
        'Immediate actions required in the event of fire. Fire in a tank is catastrophic and requires rapid response. Crew must know the location and operation of all fire suppression systems. Time is critical - procedures must be executed rapidly and decisively.',
      steps: [
        'Immediately activate fire suppression system using the emergency activation handle located at each crew station',
        'Alert all crew members via intercom: "FIRE IN THE TANK - PREPARE TO EVACUATE"',
        'Shut down engine immediately using the emergency fuel cutoff switch to stop fuel flow',
        'Identify the fire location - engine compartment, ammunition compartment, or crew area',
        'If safe to do so, use handheld fire extinguishers on accessible fires - do not endanger yourself',
        'Maintain low posture to avoid smoke inhalation - smoke rises, air is cleaner near floor level',
        'Evacuate using the fastest accessible hatch - driver or commander hatches typically provide quickest exit',
        'Move to at least 50 meters away from the tank to safety - establish a casualty collection point',
        'Account for all crew members - conduct headcount to confirm all personnel have evacuated',
        'Report incident to command immediately with location, situation, and personnel status'
      ]
    },
    {
      id: 3,
      title: 'Ammunition Handling & Safety',
      category: 'Operations',
      severity: 'Critical',
      icon: Zap,
      color: 'orange',
      description:
        'Safe handling and storage procedures for tank ammunition. Ammunition represents the most dangerous element in the tank. Any mishandling can result in catastrophic accident. Strict discipline is required at all times when ammunition is present.',
      steps: [
        'No open flames or spark-producing devices permitted within 25 meters of ammunition storage areas',
        'Handle all rounds with care - never drop, drag, or impact ammunition under any circumstances',
        'Load ammunition only when explicitly authorized by the tank commander through the intercom',
        'Secure autoloader carousel before ammunition loading - ensure safety pins are installed',
        'Seal ammunition compartment doors securely after loading - verify all locking mechanisms are engaged',
        'Report any damaged, dented, or suspect rounds immediately - never load questionable ammunition',
        'Confirm selected ammunition type matches tactical requirement before first round is loaded',
        'Maintain round awareness - gunner must always know quantity and type of loaded ammunition',
        'Store ammunition in designated compartments only - never place rounds in crew areas',
        'Remove all ammunition before tank entry into inhabited areas or designated ammunition-free zones'
      ]
    },
    {
      id: 4,
      title: 'Crew Evacuation Procedures',
      category: 'Emergency Response',
      severity: 'Critical',
      icon: AlertTriangle,
      color: 'red',
      description:
        'Procedures for rapid crew evacuation in emergency situations. Every crew member must know multiple evacuation routes and practice rapid exit procedures. All crew members must evacuate within 15 seconds of evacuation signal.',
      steps: [
        'Upon evacuation signal, each crew member immediately proceeds to nearest hatch without delay',
        'Driver uses forward hatch - pull release lever and push hatch lid fully open upward',
        'Gunner exits through turret hatch - unlock hatch, push fully open, and exit using shoulder strength',
        'Commander uses rear-facing hatch - pull safety pins and push hatch lid fully open backward',
        'Exit quickly but deliberately - avoid sudden jumps that may cause injury upon landing',
        'Drop to ground using turret handholds and roadwheels as footholds - do not jump directly to ground',
        'Move away from tank immediately toward rally point established by platoon leader',
        'Maintain low posture to avoid small arms fire if under enemy attack - use terrain for cover',
        'Establish buddy checks - each person identifies their exit partner and confirms safe evacuation',
        'Report to platoon sergeant at rally point - account for all personnel and report injuries'
      ]
    },
    {
      id: 5,
      title: 'NBC (Chemical/Biological) Protection',
      category: 'Operations',
      severity: 'High',
      icon: Shield,
      color: 'purple',
      description:
        'Procedures for nuclear, biological, and chemical contamination defense. NBC threats require immediate response and strict adherence to procedures. Contamination can be fatal if not properly managed. All crew must be proficient in NBC procedures.',
      steps: [
        'Upon NBC alarm signal, immediately activate tank NBC filtration system - switch to filtered air mode',
        'Don protective masks if outside the tank or if internal system fails - verify proper seal around face',
        'Close all external hatches and openings - seal vision blocks and periscope openings',
        'Activate internal fan circulation to create positive internal pressure - prevents external contamination',
        'Reduce vehicle speed and increase distance between tanks to avoid contamination clouds',
        'Monitor NBC detector indicators - if positive detection, transition to full protective equipment',
        'Don chemical protective suit if personnel must dismount - cover all exposed skin areas',
        'Avoid contaminated areas - report detected NBC threats to higher command immediately',
        'Do not remove protective equipment until NBC all-clear signal is given by command authority',
        'Decontaminate tank exterior at designated decontamination stations after NBC threat passes'
      ]
    }
  ];

  const emergencyContacts = [
    {
      role: 'Tank Commander',
      code: 'TC-01',
      channel: 'Intercom Channel 1',
      responsibility: 'Overall tank operations and safety authority'
    },
    {
      role: 'Platoon Leader',
      code: 'PL-01',
      channel: 'Radio Net Alpha',
      responsibility: 'Unit coordination and emergency response authority'
    },
    {
      role: 'Maintenance Support',
      code: 'MAINT-01',
      channel: 'Radio Net Bravo',
      responsibility: 'Technical assistance and mechanical emergency support'
    },
    {
      role: 'Medical Evacuation',
      code: 'MEDEVAC',
      channel: 'Emergency Channel 9',
      responsibility: 'Casualty evacuation and emergency medical response'
    },
    {
      role: 'Battalion S-3 (Operations)',
      code: 'S3-01',
      channel: 'Battalion Command Net',
      responsibility: 'Tactical guidance and operational decisions'
    }
  ];

  const safetyEquipment = [
    {
      name: 'Fire Extinguishers',
      location: 'Crew compartments (mounted)',
      quantity: '3 units',
      type: 'Automatic & Manual',
      capacity: '5 kg each',
      details: 'Automatic system activates at 70°C. Manual extinguishers available for controlled use.'
    },
    {
      name: 'First Aid Kit',
      location: "Commander's station (stowed)",
      quantity: '1 complete kit',
      type: 'Combat Medical Supply',
      capacity: '20+ items',
      details: 'Includes tourniquets, bandages, medications, and trauma supplies for emergency treatment.'
    },
    {
      name: 'Emergency Toolkit',
      location: 'External stowage box',
      quantity: '1 set',
      type: 'Mechanical Repair',
      capacity: 'Tools + spare parts',
      details: 'Allows field repairs including battery jump leads, hose clamps, spare fuses, and lubricants.'
    },
    {
      name: 'NBC Protective Masks',
      location: 'Each crew position (mounted)',
      quantity: '3 units + 1 spare',
      type: 'Chemical/Biological',
      capacity: '4 filters per mask',
      details: 'Individually sized masks with multiple filter cartridges for extended NBC protection.'
    },
    {
      name: 'Rope & Recovery Equipment',
      location: 'External stowage',
      quantity: '1 towing kit',
      type: 'Recovery',
      capacity: '50m rope + shackles',
      details: 'Enables self-recovery or mutual tank recovery from ditches or bogged terrain.'
    },
    {
      name: 'Smoke Grenade Launchers',
      location: 'Turret sides (mounted)',
      quantity: '12 grenades',
      type: 'Screening',
      capacity: '6 per side',
      details: 'Rapid smoke generation for concealment and emergency movement under fire.'
    }
  ];

  const safetyTrainingModules = [
    {
      title: 'Basic Safety Orientation',
      duration: '2 hours',
      topics: ['Tank hazards', 'Crew responsibilities', 'Communication systems', 'Basic procedures'],
      icon: FileText
    },
    {
      title: 'Emergency Evacuation Drills',
      duration: '1.5 hours',
      topics: ['Hatch operation', 'Rapid exit routes', 'Rally point procedures', 'Accountability'],
      icon: AlertTriangle
    },
    {
      title: 'Fire Suppression Training',
      duration: '2 hours',
      topics: ['System operation', 'Fire types', 'Extinguisher use', 'Evacuation procedures'],
      icon: Flame
    },
    {
      title: 'NBC Defense Procedures',
      duration: '2.5 hours',
      topics: ['Threat identification', 'Mask protocols', 'Contamination control', 'Decontamination'],
      icon: Shield
    }
  ];

  const toggleProcedure = (id) => {
    setExpandedProcedure(expandedProcedure === id ? null : id);
  };

  const toggleCheckItem = (procedureId, stepIndex) => {
    const key = `${procedureId}-${stepIndex}`;
    setCheckedItems((prev) =>
      prev.includes(key)
        ? prev.filter((i) => i !== key)
        : [...prev, key]
    );
  };

  const isChecked = (procedureId, stepIndex) =>
    checkedItems.includes(`${procedureId}-${stepIndex}`);

  return (
    <div style={{ backgroundColor: '#f8f9fb' }} className="min-h-screen">
      {/* HEADER */}
      <div className="bg-gradient-to-r from-slate-50 to-blue-50 border-b border-slate-200 px-8 py-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-red-600 p-3 rounded-lg">
              <AlertTriangle size={32} className="text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-slate-900">Safety & Emergency Procedures</h1>
              <p className="text-slate-600 text-lg mt-1">Critical training for crew safety and emergency response</p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-8 py-12 max-w-7xl mx-auto">
        {/* HERO VIDEO */}
        <div className="mb-12 rounded-xl overflow-hidden border border-slate-200 shadow-lg">
          <video autoPlay loop muted playsInline className="w-full aspect-video object-cover">
            <source src={sunTank} type="video/mp4" />
          </video>
        </div>

        {/* SAFETY NOTICE */}
        <div className="mb-12 bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-600 rounded-xl p-8 shadow-lg">
          <div className="flex items-start gap-4">
            <AlertTriangle className="text-red-600 flex-shrink-0 mt-1" size={32} />
            <div>
              <h2 className="text-2xl font-bold text-red-900 mb-2">⚠️ CRITICAL SAFETY NOTICE</h2>
              <p className="text-red-800 text-lg leading-relaxed mb-3">
                Strict adherence to all safety procedures is mandatory for all personnel. Safety violations can result in injury or death. Every crew member is responsible for maintaining safety standards and reporting hazards immediately.
              </p>
              <div className="bg-white rounded-lg p-4 border border-red-200">
                <p className="text-red-900 font-semibold text-sm">
                  Safety is not optional. It is a military obligation and professional responsibility. Non-compliance will result in disciplinary action.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* TRAINING MODULES */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Safety Training Modules</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {safetyTrainingModules.map((module, idx) => {
              const IconComponent = module.icon;
              return (
                <div key={idx} className="bg-white border border-slate-200 rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
                  <div className="flex items-center gap-3 mb-4">
                    <IconComponent className="text-blue-600" size={28} />
                    <div className="flex-1">
                      <h3 className="font-semibold text-slate-900">{module.title}</h3>
                      <p className="text-sm text-blue-600 font-medium flex items-center gap-1 mt-1">
                        <Clock size={14} /> {module.duration}
                      </p>
                    </div>
                  </div>
                  <div className="space-y-1">
                    {module.topics.map((topic, tidx) => (
                      <p key={tidx} className="text-xs text-slate-600">• {topic}</p>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* SAFETY PROCEDURES */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Emergency Procedures Checklist</h2>
          <div className="space-y-4">
            {safetyProcedures.map((procedure) => {
              const IconComponent = procedure.icon;
              const colorClasses = {
                blue: 'from-blue-50 to-blue-50 border-blue-200 text-blue-600',
                red: 'from-red-50 to-red-50 border-red-200 text-red-600',
                orange: 'from-orange-50 to-orange-50 border-orange-200 text-orange-600',
                purple: 'from-purple-50 to-purple-50 border-purple-200 text-purple-600'
              };

              const checkedCount = procedure.steps.filter((_, idx) => isChecked(procedure.id, idx)).length;
              const completionPercent = Math.round((checkedCount / procedure.steps.length) * 100);

              return (
                <div
                  key={procedure.id}
                  className={`bg-gradient-to-br ${colorClasses[procedure.color]} border-2 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all`}
                >
                  <button
                    onClick={() => toggleProcedure(procedure.id)}
                    className="w-full px-6 py-5 flex justify-between items-center text-left hover:bg-white/50 transition-colors"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <IconComponent size={24} className={`text-${procedure.color}-600`} />
                        <h3 className="text-xl font-bold text-slate-900">
                          {procedure.title}
                        </h3>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-slate-600">
                        <span className="font-semibold">{procedure.category}</span>
                        <span>•</span>
                        <span className="px-2 py-1 bg-red-200 text-red-800 rounded-full text-xs font-bold">
                          {procedure.severity}
                        </span>
                        <span>•</span>
                        <span>{procedure.steps.length} steps</span>
                        <span>•</span>
                        <span className="font-semibold text-blue-600">{completionPercent}% Complete</span>
                      </div>
                    </div>
                    <span className="text-2xl text-slate-600 ml-4">
                      {expandedProcedure === procedure.id ? '−' : '+'}
                    </span>
                  </button>

                  {expandedProcedure === procedure.id && (
                    <div className="border-t-2 border-white bg-white px-6 py-6">
                      <p className="text-slate-700 leading-relaxed mb-6 text-lg">
                        {procedure.description}
                      </p>

                      {completionPercent > 0 && (
                        <div className="mb-6">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-semibold text-slate-700">Progress</span>
                            <span className="text-sm font-bold text-blue-600">{checkedCount}/{procedure.steps.length}</span>
                          </div>
                          <div className="w-full bg-slate-200 rounded-full h-2">
                            <div
                              className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-300"
                              style={{ width: `${completionPercent}%` }}
                            />
                          </div>
                        </div>
                      )}

                      <div className="space-y-3">
                        {procedure.steps.map((step, index) => (
                          <div key={index} className="flex items-start gap-3 group">
                            <button
                              onClick={() => toggleCheckItem(procedure.id, index)}
                              className={`flex-shrink-0 w-6 h-6 rounded-md border-2 flex items-center justify-center transition-all mt-1 ${isChecked(procedure.id, index)
                                  ? 'bg-green-500 border-green-600 shadow-md'
                                  : 'border-slate-300 hover:border-green-400 bg-white'
                                }`}
                            >
                              {isChecked(procedure.id, index) && (
                                <CheckCircle2 size={18} className="text-white" />
                              )}
                            </button>
                            <p
                              className={`flex-1 text-slate-700 leading-relaxed text-base transition-all ${isChecked(procedure.id, index)
                                  ? 'line-through text-slate-400'
                                  : 'text-slate-900 font-medium'
                                }`}
                            >
                              {step}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* EMERGENCY CONTACTS & EQUIPMENT */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* EMERGENCY CONTACTS */}
          <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-lg">
            <div className="bg-gradient-to-r from-slate-100 to-slate-50 border-b border-slate-200 p-6">
              <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                <Radio className="text-blue-600" size={28} />
                Emergency Contacts & Frequencies
              </h3>
            </div>
            <div className="p-6 space-y-4">
              {emergencyContacts.map((contact, idx) => (
                <div key={idx} className="bg-gradient-to-r from-blue-50 to-slate-50 border border-blue-200 rounded-lg p-4 hover:shadow-md transition-all">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg">{contact.role}</h4>
                      <p className="text-sm text-slate-600 mt-1">{contact.responsibility}</p>
                    </div>
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                      {contact.code}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-blue-700 font-semibold text-sm">
                    <Radio size={16} />
                    {contact.channel}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SAFETY EQUIPMENT */}
          <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-lg">
            <div className="bg-gradient-to-r from-slate-100 to-slate-50 border-b border-slate-200 p-6">
              <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                <Package className="text-green-600" size={28} />
                Safety Equipment Inventory
              </h3>
            </div>
            <div className="p-6 space-y-4">
              {safetyEquipment.map((equipment, idx) => (
                <div key={idx} className="bg-gradient-to-r from-green-50 to-slate-50 border border-green-200 rounded-lg p-4 hover:shadow-md transition-all">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-bold text-slate-900 text-base">{equipment.name}</h4>
                    <span className="bg-green-600 text-white px-2 py-1 rounded text-xs font-bold">
                      {equipment.quantity}
                    </span>
                  </div>
                  <div className="space-y-1 text-sm text-slate-700">
                    <p><span className="font-semibold">Location:</span> {equipment.location}</p>
                    <p><span className="font-semibold">Type:</span> {equipment.type}</p>
                    <p><span className="font-semibold">Capacity:</span> {equipment.capacity}</p>
                    <p className="text-slate-600 italic mt-2">{equipment.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* QUICK REFERENCE GUIDE */}
        <div className="bg-slate-900 text-white rounded-xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <AlertCircle size={32} />
            Quick Reference: Critical Actions
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-600/20 border border-red-400 rounded-lg p-4">
              <h4 className="font-bold text-red-200 mb-3 uppercase tracking-wider">🔥 FIRE IN TANK</h4>
              <ol className="space-y-2 text-sm text-slate-100">
                <li>1. ACTIVATE SUPPRESSION SYSTEM</li>
                <li>2. ALERT CREW VIA INTERCOM</li>
                <li>3. SHUT DOWN ENGINE</li>
                <li>4. EVACUATE IMMEDIATELY</li>
                <li>5. MOVE 50M+ AWAY</li>
                <li>6. REPORT TO COMMAND</li>
              </ol>
            </div>
            <div className="bg-purple-600/20 border border-purple-400 rounded-lg p-4">
              <h4 className="font-bold text-purple-200 mb-3 uppercase tracking-wider">☢️ NBC THREAT</h4>
              <ol className="space-y-2 text-sm text-slate-100">
                <li>1. ACTIVATE NBC FILTRATION</li>
                <li>2. DON PROTECTIVE MASK</li>
                <li>3. CLOSE ALL HATCHES</li>
                <li>4. CREATE POSITIVE PRESSURE</li>
                <li>5. INCREASE VEHICLE SPACING</li>
                <li>6. AWAIT ALL-CLEAR SIGNAL</li>
              </ol>
            </div>
            <div className="bg-orange-600/20 border border-orange-400 rounded-lg p-4">
              <h4 className="font-bold text-orange-200 mb-3 uppercase tracking-wider">💣 AMMUNITION HAZARD</h4>
              <ol className="space-y-2 text-sm text-slate-100">
                <li>1. STOP ALL OPERATIONS</li>
                <li>2. ISOLATE AREA</li>
                <li>3. EVACUATE NON-ESSENTIAL PERSONNEL</li>
                <li>4. ALERT COMMAND</li>
                <li>5. AWAIT AMMUNITION OFFICER</li>
                <li>6. FOLLOW DISPOSAL PROCEDURES</li>
              </ol>
            </div>
            <div className="bg-blue-600/20 border border-blue-400 rounded-lg p-4">
              <h4 className="font-bold text-blue-200 mb-3 uppercase tracking-wider">🚨 EMERGENCY EVACUATION</h4>
              <ol className="space-y-2 text-sm text-slate-100">
                <li>1. HEAR SIGNAL - IMMEDIATE ACTION</li>
                <li>2. PROCEED TO NEAREST HATCH</li>
                <li>3. EXIT WITHIN 15 SECONDS</li>
                <li>4. MOVE TO RALLY POINT</li>
                <li>5. BUDDY CHECK - ACCOUNT ALL</li>
                <li>6. REPORT TO PLATOON SERGEANT</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Safety;