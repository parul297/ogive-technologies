import React, { useState } from 'react';
import { Users, Gauge, Radio, Eye, Crosshair, Zap, Settings } from 'lucide-react';

import commanderSection from '../../assets/commanderSection.jpg';
import insideTank from '../../assets/insideTank.png';
import gunner from '../../assets/gunnerSights.png';

const Controls = () => {
  const [activeStation, setActiveStation] = useState('driver');
  const [selectedControl, setSelectedControl] = useState(null);
  const [exploredControls, setExploredControls] = useState([]);

  const stations = {
    driver: {
      title: "Driver's Station",
      subtitle: "Vehicle Control & Mobility",
      icon: Gauge,
      image: insideTank,
      description: "The driver's station controls all aspects of tank mobility, steering, and propulsion. The driver operates using mechanical controls connected to the V-46-6 diesel engine and transmission system. Despite the tank's 41.5-tonne mass, driver controls are remarkably intuitive, with hydraulic assistance reducing effort required for extended operations.",
      controls: [
        {
          id: 1,
          name: 'Steering Levers',
          description: 'Controls tank direction by varying track speeds.',
          position: { top: '45%', left: '30%' },
          details: 'Mechanical linkage system with hydraulic assist. Two independent steering levers control left and right track speeds. Push forward for forward motion, pull back for reverse. Cross-controlling the levers enables tight turns and pivot maneuvers. Requires moderate physical effort but significantly easier than early Soviet tanks due to hydraulic power assistance.',
          operation: 'Push both levers forward for straight forward movement. Push left lever and pull right to turn left. The lever position directly corresponds to track speed differential.',
          maintenance: 'Regular hydraulic fluid checks required. Mechanical linkages need periodic lubrication.'
        },
        {
          id: 2,
          name: 'Throttle Pedal',
          description: 'Controls engine power output and tank speed.',
          position: { top: '70%', left: '35%' },
          details: 'Connected to the V-46-6 diesel engine governor, managing fuel injection and engine RPM. The pedal modulates power delivery smoothly, enabling precise speed control from idle to maximum output. Smooth throttle management is crucial for fuel economy and mechanical reliability during extended operations.',
          operation: 'Depress pedal gradually to increase engine speed. The V-46-6 produces 840 horsepower at maximum throttle. Smooth operation extends engine life and improves fuel consumption.',
          maintenance: 'Engine governor requires regular servicing. Fuel injectors must remain clean for optimal performance.'
        },
        {
          id: 3,
          name: 'Gear Selector',
          description: 'Manual transmission control.',
          position: { top: '50%', left: '55%' },
          details: 'The T-72 features a 7-forward, 1-reverse manual gearbox requiring manual gear changes. Gearbox selection affects tank acceleration and top speed characteristics. Lower gears provide greater torque for climbing slopes and rough terrain, while higher gears enable road march speeds. The driver must coordinate throttle and gear changes smoothly to avoid mechanical shock.',
          operation: 'Mechanical shift lever requires deliberate selection of forward gears. Reverse gear can be engaged while stationary or moving forward at very low speed. Smooth gear changes reduce transmission wear.',
          maintenance: 'Manual transmission requires regular oil changes. Clutch inspection needed periodically. Gearbox linkages require lubrication.'
        },
        {
          id: 4,
          name: 'Brake Pedal',
          description: 'Hydraulic braking system for track control.',
          position: { top: '65%', left: '45%' },
          details: 'Hydraulic brakes provide emergency stopping and precise speed control. The braking system is separate from the steering system, allowing independent control. Emergency braking capability allows stopping from maximum speed in approximately 100 meters.',
          operation: 'Depress brake pedal to engage hydraulic brakes. Smooth brake application prevents skidding and loss of control. Combined with steering lever manipulation enables controlled skid turns.',
          maintenance: 'Hydraulic fluid levels must be maintained. Brake lines require regular inspection for leaks.'
        },
        {
          id: 5,
          name: 'Periscope & Vision Block',
          description: 'Forward vision and battlefield observation.',
          position: { top: '25%', left: '40%' },
          details: 'The driver has a fixed periscope providing forward observation when buttoned up (hatches closed). The periscope can be rotated to observe left and right sectors. Multiple vision blocks provide panoramic observation for navigation and terrain assessment. Vision is limited when buttoned up, requiring reliance on commander and gunner observations.',
          operation: 'Use periscope to maintain situational awareness during movement. Rotate to scan flanks and forward areas. Vision blocks provide 180-degree forward observation.',
          maintenance: 'Optical elements require cleaning and protection from dust and sand. Periscope mechanisms need regular lubrication.'
        }
      ]
    },
    gunner: {
      title: "Gunner's Station",
      subtitle: "Weapons Control & Fire Control",
      icon: Crosshair,
      image: gunner,
      description: "The gunner operates the main armament system and fire control systems. The gunner's primary responsibility is targeting and accurate fire delivery. The gunner works in close coordination with the commander who designates targets. Modern fire control systems significantly reduce gunner workload compared to earlier manual systems.",
      controls: [
        {
          id: 6,
          name: 'Main Gun Elevators',
          description: 'Hydraulic turret and gun elevation control.',
          position: { top: '40%', left: '35%' },
          details: 'Hydraulic elevators control gun elevation relative to the tank hull. The gun is capable of elevation from -6 degrees (depression) to +14 degrees (elevation). The elevators are stabilized in both vertical and horizontal planes, enabling accurate firing while the tank moves. Manual override provides backup control if hydraulic power is lost.',
          operation: 'Joystick or handwheel controls gun elevation. Small movements provide precise elevation correction. The stabilization system maintains gun aim despite tank movement and terrain undulation.',
          maintenance: 'Hydraulic systems require regular fluid level checks. Gun mount bearings need periodic lubrication. Stabilization system requires calibration checks.'
        },
        {
          id: 7,
          name: 'Traverse Controls',
          description: 'Turret rotation and horizontal aiming.',
          position: { top: '35%', left: '50%' },
          details: 'Hydraulic traverse system rotates the turret 360 degrees independently of hull orientation. Turret traverse rate reaches 40 degrees per second in powered mode, enabling rapid target acquisition and engagement. Manual crank provides backup traverse if hydraulic power fails. Two-axis control coordinates gun elevation with turret rotation.',
          operation: 'Traverse joystick or hand controls rotate turret. Smooth coordinated movement places gun on target quickly. Power traverse can be toggled to manual operation if needed.',
          maintenance: 'Turret ring bearings require regular lubrication. Hydraulic traverse pump requires servicing. Slip ring contacts need cleaning.'
        },
        {
          id: 8,
          name: 'Fire Control System',
          description: 'Ballistic computer with laser rangefinder.',
          position: { top: '30%', left: '50%' },
          details: 'The fire control system (1PZ-7 or equivalent) integrates rangefinder, thermal imager, and ballistic computer. The system automatically calculates firing solutions accounting for target range, ammunition type, gun wear, temperature, and wind. Modern T-72B3 variants feature digital fire control computing firing solutions within seconds.',
          operation: 'Gunner designates target using optical sight or thermal imager. Depress rangefinder button to measure target distance. Fire control system automatically calculates lead and elevation. Gunner confirms aiming and selects fire.',
          maintenance: 'Optical systems require regular cleaning and protective maintenance. Laser rangefinder requires calibration. Ballistic computer memory requires periodic updates.'
        },
        {
          id: 9,
          name: 'Primary Sight System',
          description: '10x magnification optical sight.',
          position: { top: '25%', left: '65%' },
          details: 'The gunner\'s primary sight provides 10x magnification for target acquisition and aiming. The sight reticle incorporates ballistic lead indicators for various ammunition types. The sight is stabilized with the gun, maintaining aim as turret rotates. The sight features both daylight optics and thermal imaging capability in modern variants.',
          operation: 'Align sight on target using optical magnification. Fine adjust aiming using the reticle. Modern sights include ballistic lead indicators automatically calculating lead for moving targets.',
          maintenance: 'Optical elements require cleaning using proper lens care procedures. Sight reticle alignment requires periodic verification. Stabilization mechanisms need lubrication.'
        },
        {
          id: 10,
          name: 'Ammunition Selector',
          description: 'Selection of ammunition types for firing.',
          position: { top: '50%', left: '35%' },
          details: 'The gunner selects ammunition type using a mechanical selector. The 125mm gun fires multiple round types: APFSDS (kinetic), HEAT (shaped charge), and HE-Frag (explosive). The selection determines ballistic characteristics and flight time. Different ammunition types have different firing solutions, requiring selection before engagement.',
          operation: 'Rotate ammunition selector to desired round type before engagement. The selector also adjusts fire control system ballistic calculations automatically in modern variants.',
          maintenance: 'Selector mechanism requires smooth operation and occasional lubrication.'
        }
      ]
    },
    commander: {
      title: "Commander's Station",
      subtitle: "Battlefield Awareness & Coordination",
      icon: Eye,
      image: commanderSection,
      description: "The commander sits in the turret behind the gunner, maintaining 360-degree battlefield awareness and coordinating with the driver and gunner. The commander designates targets for the gunner, coordinates with other tank platoon members via radio, and makes tactical decisions. The commander's panoramic sight provides superior observation capability compared to the gunner's sight.",
      controls: [
        {
          id: 11,
          name: 'Panoramic Sight',
          description: '360-degree battlefield observation.',
          position: { top: '25%', left: '45%' },
          details: 'The commander\'s panoramic sight rotates 360 degrees independently of the gun, providing simultaneous observation while the gunner tracks a different target. The sight features 5x magnification for distant target identification and 10x magnification for detailed observation. The panoramic sight is stabilized against vehicle movement, maintaining observation during tank maneuvers.',
          operation: 'Rotate panoramic sight to scan entire battlefield perimeter. The independent stabilization enables target designation while turret and gun point at other targets. Commander can identify multiple targets for sequential engagement.',
          maintenance: 'Optical elements require protective maintenance and cleaning. Stabilization system requires calibration. Sight rotation mechanism needs lubrication.'
        },
        {
          id: 12,
          name: 'Thermal Imaging System',
          description: 'Night and adverse weather surveillance.',
          position: { top: '30%', left: '55%' },
          details: 'Modern T-72B3 variants include thermal imaging systems (Sosna or equivalent) in both commander and gunner stations. Thermal imaging detects heat signatures, enabling target acquisition and engagement in complete darkness or heavy smoke. Thermal imaging range exceeds 3 kilometers in darkness, providing significant tactical advantage in night operations.',
          operation: 'Switch sight to thermal mode for night operations. Thermal imager displays temperature gradients as visible images. Can identify stationary or moving targets through smoke and dust.',
          maintenance: 'Thermal detector requires cooling system maintenance. Optical windows need regular cleaning with thermal-safe materials. System requires periodic recalibration.'
        },
        {
          id: 13,
          name: 'Communication System',
          description: 'External radio and internal intercom.',
          position: { top: '50%', left: '55%' },
          details: 'The commander operates the external radio system for communication with other tanks and headquarters. The internal intercom system connects all crew members for coordination. Radio frequencies are encrypted to prevent enemy interception. The commander typically operates on both company and battalion frequencies simultaneously.',
          operation: 'Use headset microphone for intercom communication with crew. Select external radio frequency using tuning controls. Transmit tactical information and receive orders from superior headquarters.',
          maintenance: 'Radio equipment requires regular calibration and frequency verification. Intercom system connections require periodic inspection. Antenna connections must remain secure.'
        },
        {
          id: 14,
          name: 'Periscope Array',
          description: 'Multi-directional observation capability.',
          position: { top: '35%', left: '40%' },
          details: 'The commander has access to multiple fixed and rotating periscopes providing observation in all directions. The rotating periscope can be adjusted for continuous surveillance. These periscopes enable observation when the hatch is closed and the tank is buttoned up. Periscope views cannot be degraded by smoke or dust on the hull, providing reliable observation during battle.',
          operation: 'Rotate periscopes to observe different sectors around the tank. Use fixed periscopes for rapid reference checks. Maintain awareness of flanks and rear approaches.',
          maintenance: 'Optical elements require protective maintenance. Periscope rotation mechanisms need lubrication. Protective covers must be kept clean.'
        },
        {
          id: 15,
          name: 'Laser Rangefinder',
          description: 'Target distance measurement for fire control.',
          position: { top: '28%', left: '50%' },
          details: 'The commander\'s station includes an independent laser rangefinder (in modern variants) enabling target range measurement separate from the gun\'s rangefinder. This redundancy ensures firing solution accuracy and provides independent verification of gun rangefinder data. Laser rangefinder measurement is essential input for the fire control computer.',
          operation: 'Aim rangefinder at target and depress measurement button. Laser pulse measures distance and returns value to fire control system. Modern systems integrate rangefinder data automatically into ballistic calculations.',
          maintenance: 'Laser emitter and receiver optics require protective maintenance. Mechanical alignment of rangefinder with sight axes requires periodic verification. System requires calibration before each operation.'
        }
      ]
    }
  };

  const handleControlClick = (control) => {
    setSelectedControl(control);
    if (!exploredControls.includes(control.id)) {
      setExploredControls([...exploredControls, control.id]);
    }
  };

  const currentStation = stations[activeStation];
  const completionPercentage = Math.round(
    (exploredControls.length / Object.values(stations).reduce((sum, s) => sum + s.controls.length, 0)) * 100
  );

  const StationIcon = currentStation.icon;

  return (
    <div style={{ backgroundColor: '#f8f9fb' }} className="min-h-screen">
      {/* HEADER */}
      <div className="bg-gradient-to-r from-slate-50 to-blue-50 border-b border-slate-200 px-8 py-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-blue-600 p-3 rounded-lg">
              <Users size={32} className="text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-slate-900">Crew Controls & Stations</h1>
              <p className="text-slate-600 text-lg mt-1">Interactive training module for T-72 crew operations</p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-8 py-12 max-w-7xl mx-auto">
        {/* PROGRESS & INTRO */}
        <div className="bg-gradient-to-r from-blue-50 to-slate-50 border border-blue-200 rounded-xl p-6 mb-10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-slate-900">Interactive Control Training</h2>
            <span className="text-2xl font-bold text-blue-600">{completionPercentage}%</span>
          </div>
          <p className="text-slate-700 mb-4">
            Select a crew station and interact with highlighted controls to learn their functions. Click on each control point to explore detailed information about operation, characteristics, and maintenance requirements.
          </p>
          <div className="w-full bg-slate-200 rounded-full h-3">
            <div
              className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-500"
              style={{ width: `${completionPercentage}%` }}
            />
          </div>
          <p className="text-sm text-slate-600 mt-3">
            Controls Explored: {exploredControls.length} / {Object.values(stations).reduce((sum, s) => sum + s.controls.length, 0)}
          </p>
        </div>

        {/* STATION SELECTION */}
        <div className="grid md:grid-cols-3 gap-4 mb-10">
          {Object.entries(stations).map(([key, station]) => {
            const IconComponent = station.icon;
            return (
              <button
                key={key}
                onClick={() => {
                  setActiveStation(key);
                  setSelectedControl(null);
                }}
                className={`p-6 rounded-xl border-2 text-left transition-all hover:shadow-lg ${activeStation === key
                    ? 'border-blue-600 bg-blue-50 shadow-lg'
                    : 'border-slate-200 bg-white hover:border-blue-300'
                  }`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={`p-2 rounded-lg ${activeStation === key ? 'bg-blue-600' : 'bg-slate-100'}`}>
                    <IconComponent
                      size={24}
                      className={activeStation === key ? 'text-white' : 'text-slate-600'}
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">{station.title}</h3>
                    <p className="text-xs text-slate-600">{station.subtitle}</p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* MAIN CONTENT */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* IMAGE SECTION */}
          <div className="lg:col-span-2">
            <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-lg">
              <div className="bg-gradient-to-r from-slate-100 to-slate-50 border-b border-slate-200 p-4">
                <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                  <StationIcon className="text-blue-600" size={28} />
                  {currentStation.title}
                </h3>
              </div>

              <div className="p-6">
                <p className="text-slate-700 leading-relaxed mb-6 text-base">
                  {currentStation.description}
                </p>

                <div className="relative rounded-lg overflow-hidden bg-slate-900 border border-slate-300">
                  <img
                    src={currentStation.image}
                    alt={currentStation.title}
                    className="w-full h-auto"
                  />

                  {currentStation.controls.map((control) => {
                    const isExplored = exploredControls.includes(control.id);

                    return (
                      <button
                        key={control.id}
                        onClick={() => handleControlClick(control)}
                        className={`absolute w-8 h-8 rounded-full border-2 transition-all hover:scale-125 transform -translate-x-1/2 -translate-y-1/2 ${isExplored
                            ? 'bg-green-500 border-green-600 shadow-lg shadow-green-400/50'
                            : 'bg-blue-500 border-blue-600 hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-400/50'
                          }`}
                        style={{
                          top: control.position.top,
                          left: control.position.left,
                        }}
                        title={control.name}
                      />
                    );
                  })}
                </div>

                <p className="text-sm text-slate-600 mt-4 text-center">
                  Click on highlighted points to explore control functions
                </p>
              </div>
            </div>
          </div>

          {/* DETAILS SECTION */}
          <div>
            <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-lg h-full">
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-6 border-b border-blue-400">
                <h3 className="text-2xl font-bold mb-1">
                  {selectedControl ? selectedControl.name : 'Select a Control'}
                </h3>
                {selectedControl && (
                  <p className="text-blue-100 text-sm">{currentStation.title}</p>
                )}
              </div>

              <div className="p-6 space-y-6 overflow-y-auto max-h-[600px]">
                {selectedControl ? (
                  <>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2 text-lg">Overview</h4>
                      <p className="text-slate-700 leading-relaxed">
                        {selectedControl.description}
                      </p>
                    </div>

                    <div className="border-t border-slate-200 pt-4">
                      <h4 className="font-semibold text-slate-900 mb-2">Detailed Description</h4>
                      <p className="text-slate-700 text-sm leading-relaxed">
                        {selectedControl.details}
                      </p>
                    </div>

                    <div className="border-t border-slate-200 pt-4">
                      <h4 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                        <Zap size={18} className="text-blue-600" />
                        Operation
                      </h4>
                      <p className="text-slate-700 text-sm leading-relaxed">
                        {selectedControl.operation}
                      </p>
                    </div>

                    <div className="border-t border-slate-200 pt-4">
                      <h4 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                        <Settings size={18} className="text-blue-600" />
                        Maintenance
                      </h4>
                      <p className="text-slate-700 text-sm leading-relaxed">
                        {selectedControl.maintenance}
                      </p>
                    </div>
                  </>
                ) : (
                  <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                    <Crosshair className="text-slate-300 mb-4" size={48} />
                    <p className="text-slate-600 font-medium mb-2">No Control Selected</p>
                    <p className="text-slate-500 text-sm">
                      Click on any highlighted control point in the station image to view detailed information
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* CONTROLS LIST */}
        <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-lg">
          <div className="bg-gradient-to-r from-slate-100 to-slate-50 border-b border-slate-200 p-6">
            <h3 className="text-2xl font-bold text-slate-900">All Controls Reference</h3>
            <p className="text-slate-600 mt-2">Complete list of {currentStation.controls.length} controls in {currentStation.title}</p>
          </div>
          <div className="p-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {currentStation.controls.map((control) => {
                const isExplored = exploredControls.includes(control.id);
                return (
                  <button
                    key={control.id}
                    onClick={() => handleControlClick(control)}
                    className={`p-4 rounded-lg border-2 text-left transition-all hover:shadow-md ${isExplored
                        ? 'border-green-300 bg-green-50'
                        : 'border-slate-200 bg-slate-50 hover:border-blue-300 hover:bg-blue-50'
                      }`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold text-slate-900 text-sm pr-2">{control.name}</h4>
                      {isExplored && (
                        <span className="text-green-600 font-bold text-xs">✓</span>
                      )}
                    </div>
                    <p className="text-slate-600 text-xs leading-relaxed">
                      {control.description}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Controls;