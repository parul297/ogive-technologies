import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Shield, Zap, Cpu, Car, TrendingUp, Users, Wrench, Target, AlertCircle, Award, BookOpen, Factory } from 'lucide-react';

import closeUp from '../../assets/closeUpTank.jpg';
import colorT from '../../assets/colorT-72.jpg';
import groupTank from '../../assets/groupTank.jpg';
import sandTank from '../../assets/sandTank.jpg';
import tankCarrying from '../../assets/tankCarryingTank.jpg';
import tankFront from '../../assets/tankFront.jpg';

const TankOverview = () => {
  const [activeTab, setActiveTab] = useState('history');
  const [heroIndex, setHeroIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const carouselImages = [
    { src: groupTank, caption: 'T-72 Platoon Formation' },
    { src: colorT, caption: 'Standard Desert Camouflage' },
    { src: closeUp, caption: 'Turret Detail and Main Gun' },
    { src: sandTank, caption: 'Desert Operations' },
    { src: tankCarrying, caption: 'Tank Transport' },
    { src: tankFront, caption: 'Front View and Armor' }
  ];

  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [autoPlay]);

  const nextSlide = () => {
    setHeroIndex((prev) => (prev + 1) % carouselImages.length);
    setAutoPlay(false);
  };

  const prevSlide = () => {
    setHeroIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
    setAutoPlay(false);
  };

  const specifications = [
    { label: 'Combat Weight', value: '41.5 tonnes', category: 'Dimensions' },
    { label: 'Length', value: '9.53 m', category: 'Dimensions' },
    { label: 'Width', value: '3.59 m', category: 'Dimensions' },
    { label: 'Height', value: '2.23 m', category: 'Dimensions' },
    { label: 'Crew', value: '3 personnel', category: 'Personnel' },
    { label: 'Commander', value: '12.7mm AA gun', category: 'Armament' },
    { label: 'Main Gun', value: '125mm 2A46', category: 'Armament' },
    { label: 'Coaxial Gun', value: '7.62mm PKT', category: 'Armament' },
    { label: 'Engine', value: 'V-46-6 diesel', category: 'Powerplant' },
    { label: 'Horsepower', value: '840 HP', category: 'Powerplant' },
    { label: 'Max Speed', value: '60 km/h', category: 'Performance' },
    { label: 'Range', value: '460 km', category: 'Performance' },
    { label: 'Power/Weight', value: '20.2 HP/t', category: 'Performance' },
    { label: 'Armor Type', value: 'Composite Steel', category: 'Protection' },
    { label: 'NBC System', value: 'Yes - Filtration', category: 'Protection' },
    { label: 'Autoloader', value: '6-8 rounds/min', category: 'Firepower' }
  ];

  const capabilities = [
    {
      title: 'Main Armament System',
      description: '125mm 2A46 smoothbore gun with advanced autoloader mechanism. The main gun is fully stabilized in both vertical and horizontal planes, enabling accurate fire on the move. The autoloader reduces crew workload and increases rate of fire significantly.',
      features: ['APFSDS rounds (armor-piercing)', 'HEAT rounds (anti-armor)', 'HE-Frag rounds (anti-personnel)', '6-8 rounds per minute fire rate', 'Autoloader system for rapid fire', 'Breech-loaded ammunition'],
      image: closeUp,
      icon: Zap,
      content: 'The 125mm gun fires a variety of ammunition types suitable for different targets. APFSDS (Armor-Piercing Fin-Stabilized Discarding Sabot) rounds use kinetic energy to penetrate armor at long range. HEAT (High Explosive Anti-Tank) rounds utilize shaped charge warheads. HE-Frag rounds are effective against soft targets and structures. The autoloader system, a distinguishing feature of the T-72, automatically loads rounds into the breach, allowing a three-person crew to operate effectively.'
    },
    {
      title: 'Fire Control & Targeting',
      description: 'Advanced fire control system with laser rangefinder, thermal imaging, and ballistic computer for precise targeting in all weather conditions and darkness. Modern variants feature digital targeting systems.',
      features: ['1PZ-7 or equivalent rangefinder', 'Thermal imaging for night operations', 'Ballistic computer', '10x magnification optics', 'Traverse rates up to 40°/sec', 'Stabilized gun system'],
      image: tankFront,
      icon: Target,
      content: 'The fire control system represents the integration of multiple sensor systems to achieve accurate targeting. The laser rangefinder measures exact distance to targets, feeding data into the ballistic computer which calculates firing solutions accounting for wind, temperature, and other factors. Modern T-72B3 variants feature thermal imaging that detects heat signatures, enabling target acquisition and engagement in complete darkness or adverse weather. The stabilization system maintains gun aim while the tank moves, a critical capability for modern mobile warfare. Thermal imaging systems can detect targets at ranges exceeding 3 km in darkness.'
    },
    {
      title: 'Armor & Protection',
      description: 'Composite armor configuration provides superior protection against kinetic and chemical energy threats. NBC (Nuclear, Biological, Chemical) filtration system protects crew in contaminated environments.',
      features: ['Composite steel-ceramic armor', 'Sloped glacis plate design', 'Spaced side armor with skirts', 'Turret face hardening', 'NBC air filtration system', 'Smoke grenade launchers'],
      image: sandTank,
      icon: Shield,
      content: 'The T-72\'s armor scheme uses composite construction combining steel plates with ceramic materials to achieve superior protection-to-weight ratios compared to homogeneous steel armor. The glacis plate (front slope) is angled to increase effective thickness and deflect incoming rounds. Side skirts provide protection against shaped-charge warheads. The turret features increased thickness in the frontal arc where threats are most likely. The NBC system includes an air filtration unit that removes radioactive particles, chemical agents, and biological contaminants from the air entering the tank. Smoke grenade launchers provide tactical smoke cover for movement or defense.'
    },
    {
      title: 'Mobility & Cross-Country',
      description: 'High-performance V-46 diesel engine provides excellent power-to-weight ratio. Hydrogas suspension enables superior cross-country mobility and obstacle crossing capability. Deep fording capability with snorkel kit.',
      features: ['V-46-6 diesel engine (840 HP)', 'Torsion bar suspension with Hydrogas', '5 large road wheels per side', 'All-terrain track design', 'Deep fording to 5.2m with kit', 'Vertical obstacle clearance 0.85m'],
      image: colorT,
      icon: Car,
      content: 'The V-46-6 diesel engine is a compact, reliable powerplant that delivers 840 horsepower, providing a power-to-weight ratio of 20.2 hp/tonne. This enables rapid acceleration and responsive handling for a vehicle of its size. The Hydrogas suspension system combines hydraulics with gas springs, providing excellent mobility over broken terrain while maintaining crew comfort. The tank can ford rivers up to 5.2 meters deep using an additional snorkel kit, or standard 1.4-meter fording without equipment. Vertical obstacle capability of 0.85 meters allows crossing ditches and rubble-filled terrain. The tracked propulsion system distributes weight effectively, providing low ground pressure suitable for various terrain types.'
    }
  ];

  const timelineEvents = [
    {
      year: '1970-1973',
      title: 'Development & Design Phase',
      description: 'The T-72 was developed by Uralvagonzavod under the direction of Leonid Kartsev as an improved successor to the T-62 and more advanced T-70 experimental tank. The design philosophy emphasized mechanical reliability, ease of maintenance, and cost-effectiveness for mass production. The Soviet military recognized the need for a tank that could be produced in vast numbers while maintaining combat effectiveness. Key design decisions included the adoption of an autoloader system to reduce crew size from five (T-55/T-62) to three, which lowered production costs and reduced the turret profile. Extensive testing and refinement occurred throughout this period, with prototypes undergoing evaluation in Soviet proving grounds.',
      highlights: ['Uralvagonzavod factory selected', 'Design emphasis on simplicity', 'Autoloader system adopted', 'Three-person crew concept', 'Composite armor development began']
    },
    {
      year: '1973',
      title: 'Initial Deployment & Service Entry',
      description: 'The T-72 officially entered service with the Soviet Red Army in 1973, beginning one of the most significant tank production runs in history. Initial deployment saw the tank distributed to elite mechanized divisions of the Soviet Western Group of Forces. The tank was immediately recognized for its innovative features, particularly the autoloader system which was revolutionary at the time. Early models featured the 2A28M gun and relatively basic fire control systems. The tank quickly demonstrated its reliability in training exercises, with minimal mechanical failures. Soviet doctrinal manuals were rewritten to emphasize the T-72\'s strengths: mobility, firepower, and armor. Production ramped up significantly, with multiple factories eventually manufacturing the tank.',
      highlights: ['Soviet Red Army adoption', 'Western Group of Forces deployment', 'Autoloader innovation recognized', 'Training exercises show reliability', 'Mass production begins']
    },
    {
      year: '1975-1982',
      title: 'International Export & Proliferation',
      description: 'Following successful Soviet military adoption, the T-72 was marketed to allies within the Warsaw Pact and other Soviet-aligned nations. East Germany, Poland, Czechoslovakia, Hungary, and Romania all received T-72s for their armed forces. Simultaneously, the tank began proliferation beyond the Soviet sphere, with exports to Middle Eastern nations including Syria, Iraq, and Egypt. The Arab-Israeli conflicts of 1973 and subsequent regional wars in the Middle East demonstrated the T-72\'s combat effectiveness against Israeli armor, though often facing superior Western technology. By 1982, over 8,000 T-72s had been produced globally. The tank\'s simplicity made it attractive to nations with less developed military infrastructure, as it required fewer specialized maintenance facilities than contemporary Western tanks.',
      highlights: ['Warsaw Pact adoption', 'Middle Eastern exports', 'Arab-Israeli conflict service', '8,000+ units produced', 'Global proliferation accelerates']
    },
    {
      year: '1978-1982',
      title: 'T-72A Modernization',
      description: 'The T-72A variant represented a significant modernization package introduced in the late 1970s. Major improvements included the upgraded 2A46 125mm gun with improved ballistics and reliability, enhanced armor configuration particularly in the turret, upgraded fire control systems with improved rangefinding capability, and improved ammunition storage. The gun stabilization system was refined for better accuracy on the move. Engine performance was optimized for slightly improved power output. The T-72A became the standard variant for most Warsaw Pact forces and new exports. Its introduction demonstrated the platform\'s adaptability to upgrades. Newer T-72A tanks were retrofitted with these improvements, extending the service life of earlier variants. The T-72A represented the first major evolution of the design.',
      highlights: ['2A46 gun upgrade', 'Improved armor configuration', 'Enhanced fire control', 'Refined stabilization system', 'Becomes standard variant worldwide']
    },
    {
      year: '1985-1991',
      title: 'T-72B Advanced Variant',
      description: 'The T-72B introduction in 1985 marked a major technological leap. The new variant featured the 1G42 thermal imaging system, a revolutionary addition that provided night fighting capability. The gun was further improved with higher muzzle velocity. New composite armor packages significantly enhanced protection. A more sophisticated fire control system incorporated thermal data into targeting solutions. The autoloader mechanism was refined for increased reliability and slightly faster rate of fire. Engine improvements provided marginal power increases. The T-72B represented a fundamental upgrade trajectory, showing how the basic platform could accommodate cutting-edge technology. This variant was extensively exported to allies and saw service in various regional conflicts throughout the late Cold War period.',
      highlights: ['1G42 thermal imaging introduced', 'Advanced composite armor', 'Upgraded ammunition', 'Improved fire control', 'Night fighting capability']
    },
    {
      year: '1991',
      title: 'Gulf War Combat Experience',
      description: 'During Operation Desert Storm, Iraqi T-72s faced Coalition forces equipped with superior technology. While Iraqi T-72s suffered heavy losses against American M1 Abrams and British Challenger tanks, the engagements provided valuable combat data. Analysis of T-72 losses and survivability rates revealed vulnerabilities but also unexpected resilience of the design. The composite armor stood up reasonably well to kinetic rounds at extreme range. However, Coalition thermal imaging provided overwhelming advantage in target acquisition. Despite the unfavorable outcome, the Gulf War demonstrated that the T-72 remained a formidable platform when properly operated and supported. This conflict accelerated upgrade plans for T-72 operators worldwide.',
      highlights: ['First large-scale modern combat', 'Technology gap analysis', 'Armor performance data', 'Upgrade programs accelerated', 'Lessons learned globally']
    },
    {
      year: '1998-2010',
      title: 'T-72B3 Modernization Program',
      description: 'The T-72B3 represented a comprehensive modernization addressing lessons learned from the 1990s Chechen conflicts and analyzing Western tank capabilities. The upgrade package included the Sosna thermal imaging system with superior performance to earlier systems, new digital fire control system replacing analog components, upgraded communications equipment, improved armor packages incorporating modern composite materials, 1V528 integrated fire control system, and refined ammunition types. The V-46-6 engine remained largely unchanged but reliability improvements were made. Most significantly, the digital architecture integrated all tank systems, providing significantly improved targeting and engagement capabilities. The upgrade program transformed 1970s-era basic tanks into 21st-century capable platforms. Rather than producing entirely new tanks, upgrading existing T-72s proved cost-effective while maintaining fleet strength.',
      highlights: ['Sosna thermal system', 'Digital fire control integration', 'Advanced composite armor', 'Modern communications suite', 'Comprehensive modernization']
    },
    {
      year: '2015-Present',
      title: 'Current Generation T-72B3M & Ongoing Service',
      description: 'The T-72B3M represents the current standard configuration incorporating the latest upgrades. Modern variants feature the Relikt active protection system (some configurations), advanced thermal imaging, digital battlefield management systems, and improved ergonomics. The tank continues service with Russian forces, and numerous export variants maintain global operational presence. The 2022 Ukraine conflict demonstrated the T-72\'s continued relevance, though also exposing operational limitations when improperly deployed. Over 47,000 T-72 tanks have been produced in total, making it the most widely produced main battle tank in history. Modern upgrades continue, with work on T-72BZ and further variants incorporating advanced protection systems. The platform demonstrates remarkable longevity—a 50-year-old design continuing relevance through continuous modernization. Future upgrades focus on autonomous systems, artificial intelligence integration, and networked warfare capabilities.',
      highlights: ['Relikt APS integration', 'Advanced protection systems', '47,000+ total production', 'Ongoing service worldwide', 'Continuous modernization']
    }
  ];

  const designPhilosophy = [
    {
      title: 'Mechanical Simplicity & Reliability',
      icon: Wrench,
      content: 'The T-72 was engineered with mechanical simplicity as a core design principle. Every system was designed to function with minimal complexity, reducing points of failure and enabling maintenance in field conditions with basic tools. The autoloader, while technically sophisticated, is mechanically simple compared to alternative systems. Hydraulic systems use robust components proven in earlier Soviet designs. The torsion bar suspension is straightforward and forgiving of rough treatment. This philosophy meant that a tank damaged in combat could often be repaired by crews with limited technical training. Spare parts were standardized across the fleet, simplifying logistics. The three-person crew handled all functions without requiring specialists, allowing rapid crew replacement. This emphasis on reliability over sophistication enabled the Soviet military to maintain massive fleet availability even under budget constraints.',
      details: ['Minimal complex electronics', 'Proven component designs', 'Field-maintainable systems', 'Standardized spare parts', 'Crew-repairable subsystems']
    },
    {
      title: 'Cost-Effectiveness & Mass Production',
      icon: Factory,
      content: 'Cost was a primary design constraint. Soviet doctrine emphasized quantity—numerically overwhelming enemy forces. The T-72 was engineered for efficient production in multiple factories using existing manufacturing capabilities. The design minimized expensive materials, using steel construction rather than exotic alloys. Production tooling was simplified compared to Western tanks. The three-person crew reduced cockpit size, complexity, and manufacturing cost. Armor construction used welded steel rather than more expensive casting techniques. The autoloader reduced manual assembly labor per gun. This focus on cost-effectiveness enabled production of 45,000+ tanks globally at costs Soviet planners could afford. Countries with limited defense budgets could afford T-72s where Western tanks remained prohibitively expensive. The cost advantage enabled technology transfer to allies, strengthening the Soviet bloc.',
      details: ['Efficient manufacturing process', 'Reduced raw material usage', 'Simplified armor construction', 'Economies of scale achievable', 'Affordable for Soviet allies']
    },
    {
      title: 'Crew Survivability & Ergonomics',
      icon: Shield,
      content: 'The T-72 design prioritized crew safety through multiple mechanisms. The autoloader eliminated manual ammunition handling during combat, reducing fatigue and injury risk during extended operations. The reduced crew size of three personnel meant a smaller target signature and reduced turret profile compared to five-crew tanks like the T-55. Crew seating was ergonomic for the era, with adjustable positions. The loader position, eliminated by automation, was a particularly vulnerable station in earlier tanks. Armor protection emphasized the turret front where three crew members concentrated. The design included ejection seats concepts in some variants. NBC systems protected crew from chemical and biological weapons, a significant concern during Cold War era. Crew access and exit were simplified compared to earlier designs. Training emphasized crew cooperation and communication, with the simplified systems enabling less experienced personnel to operate effectively.',
      details: ['Autoloader eliminates dangerous loading', 'Smaller turret profile', 'Ergonomic crew positions', 'NBC protection standard', 'Improved crew comfort']
    },
    {
      title: 'Modular Architecture & Upgradability',
      icon: TrendingUp,
      content: 'The T-72 was designed with future upgrades in mind, featuring modular architecture allowing component replacement without complete redesign. The gun breech was standardized with other Soviet tanks, enabling rapid gun upgrades. The engine compartment was designed to accommodate higher-output engines. Turret hardpoints accepted different fire control systems. Armor packages could be replaced incrementally. Electronics bays were designed for future system installation. The basic hull and suspension proved so robust that decades later, T-72s accepted thermal imaging systems, digital fire control, and modern communications. This upgradeability meant that rather than scrapping aging tanks, operators could modernize existing platforms. The T-72B3 upgrade, applied to 1970s-era hulls, created functionally modern tanks. This modular philosophy proves economically superior to wholesale replacement, explaining the T-72\'s continued service. The basic design remains relevant despite 50 years of technological change.',
      details: ['Standardized component interfaces', 'Plug-compatible subsystems', 'Future-proofed electrical bays', 'Armor package modularity', 'Gun system flexibility']
    },
    {
      title: 'Doctrine Integration & Tactical Deployment',
      icon: Users,
      content: 'The T-72 was designed specifically for Soviet tactical doctrine emphasizing rapid offensive operations with massed armor formations. The tank\'s mobility enabled rapid exploitation of breakthroughs. The simplified crew training allowed rapid crew turnover and replacement. The robust design withstood the harsh environmental conditions of Central European deployment. The fire control system was optimized for engagement ranges typical of European battlefields. The gun selected (125mm) represented an optimal balance between stopping power and practical firing rates. The ammunition capacity and autoloader provided sustained fire capability during breakthrough operations. Tank crews could operate effectively in adverse weather, dust, and mud. The design assumed basic infrastructure—no requirement for sophisticated maintenance bases. This doctrinal alignment proved crucial to the T-72\'s success globally, as many nations adopted similar operational concepts.',
      details: ['Optimized for massed formations', 'Rapid crew turnover capability', 'Environmental robustness', 'Doctrine-aligned firepower', 'Infrastructure-independent operation']
    }
  ];

  const advancedContent = {
    development: 'The T-72 development program, initiated in the late 1960s, represented a significant shift in Soviet tank design philosophy. Chief Designer Leonid Kartsev led a team at Uralvagonzavod that reconsidered fundamental assumptions about tank design. Previous tanks like the T-55 and T-62 featured five-crew configurations with manual gun loading. Kartsev\'s vision emphasized a three-crew layout enabled by an autoloader system. This required complete redesign of turret architecture, ammunition handling, and gun systems. The program faced skepticism from conservative Soviet military leadership accustomed to five-crew tanks. Extensive testing demonstrated the autoloader\'s reliability and the three-crew configuration\'s viability. The design integrated proven components from earlier tanks—torsion bar suspension from T-55, diesel engine concepts, and composite armor research. Rather than attempting revolutionary technology, the design focused on evolutionary improvements executed flawlessly. This approach proved superior to revolutionary designs that often encountered developmental problems.',

    legacy: 'The T-72\'s legacy extends far beyond its direct combat record. The autoloader technology became industry standard, adopted by subsequent Soviet tanks (T-80, T-90), and even influencing Western tank designers. The philosophy of simplicity and reliability influenced global tank design discourse. Countries operating T-72s developed their own doctrines around its capabilities, creating a global community of T-72 operators. The tank\'s presence in over 60 countries shaped geopolitics—technology transfers strengthened Soviet allies. The tank\'s combat record across multiple conflicts provided invaluable data on armor protection, ballistics, and thermal imaging effectiveness. Modern tank designers study T-72 design decisions as case studies in cost-effective capability development. The platform\'s longevity—continuing upgrade programs 50 years after introduction—demonstrates exceptional foundational design. The T-72 represents post-WWII Soviet industrial and engineering achievements, symbolizing technological capacity despite resource constraints. Its influence on global military technology endures, making it arguably the most significant tank design of the Cold War era.',

    production: 'T-72 production spanned multiple Soviet factories and eventually international manufacturers, achieving unprecedented scale. Uralvagonzavod in Yekaterinburg was the primary production facility, producing the majority of Soviet tanks. However, licensing agreements enabled production in Czechoslovakia (producing variants for Czech forces), Poland (Polish PT-91), and Hungary. Export markets stimulated additional production in East Germany, Romania, and other Eastern Bloc nations. Soviet production continued until the 1990s, with tens of thousands of T-72s produced in multiple variants. The economic efficiency of the production process enabled unit costs significantly lower than Western tanks, though exact figures remain classified. Production techniques included automated welding, standardized sub-assemblies, and component interchangeability. The tank\'s popularity created a secondary market—surplus Soviet T-72s sold after Cold War to numerous developing nations. Currently, over 47,000 T-72 tanks have been produced globally, making it statistically the most produced main battle tank in history. This staggering production volume testifies to the design\'s fundamental soundness and manufacturing efficiency.'
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f8f9fb' }}>
      <div className="relative h-96 md:h-[520px] overflow-hidden bg-gradient-to-br from-slate-100 to-slate-50">
        <div className="relative w-full h-full">
          {carouselImages.map((img, idx) => (
            <div
              key={idx}
              className="absolute inset-0 transition-opacity duration-1000"
              style={{ opacity: idx === heroIndex ? 1 : 0 }}
            >
              <img src={img.src} alt={img.caption} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>

        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.1) 0%, rgba(0,0,0,0.15) 100%)' }} />

        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-slate-800 p-3 rounded-full shadow-lg transition-all hover:shadow-xl"
        >
          <ChevronLeft size={28} />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-slate-800 p-3 rounded-full shadow-lg transition-all hover:shadow-xl"
        >
          <ChevronRight size={28} />
        </button>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {carouselImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => { setHeroIndex(idx); setAutoPlay(false); }}
              className={`rounded-full transition-all ${idx === heroIndex ? 'bg-slate-800 w-8 h-2' : 'bg-white/50 w-2 h-2 hover:bg-white/70'
                }`}
            />
          ))}
        </div>

        <div className="absolute bottom-8 left-8 z-20">
          <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg">T-72 Main Battle Tank</h1>
          <p className="text-xl text-white/95 drop-shadow-md mt-2">Soviet Union • 1973 – Present • 47,000+ Produced Globally</p>
          <p className="text-base text-white/90 drop-shadow-md mt-1">{carouselImages[heroIndex].caption}</p>
        </div>
      </div>

      <div className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-sm">
        <div className="px-8 py-4">
          <div className="flex gap-8 max-w-7xl mx-auto overflow-x-auto">
            {[
              { id: 'history', label: 'History & Timeline', icon: BookOpen },
              { id: 'philosophy', label: 'Design Philosophy', icon: Wrench },
              { id: 'specs', label: 'Specifications', icon: Cpu },
              { id: 'capabilities', label: 'Capabilities', icon: Zap }
            ].map(tab => {
              const IconComponent = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`pb-2 font-semibold text-base transition-all flex items-center gap-2 whitespace-nowrap border-b-2 ${activeTab === tab.id
                    ? 'text-blue-600 border-blue-600'
                    : 'text-slate-600 border-transparent hover:text-slate-900'
                    }`}
                >
                  <IconComponent size={20} />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="px-8 py-12 max-w-7xl mx-auto">
        {activeTab === 'history' && (
          <div className="space-y-12">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Development History & Legacy</h2>
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <p className="text-lg text-slate-700 leading-relaxed mb-4">
                    The T-72 represents one of the most significant and widely-adopted military vehicles of the modern era. Conceived during the Cold War as a cost-effective, reliable main battle tank, it evolved from a Soviet workhorse into a globally distributed platform serving dozens of nations across nearly five decades of continuous service.
                  </p>
                  <p className="text-base text-slate-600 leading-relaxed">
                    {advancedContent.development}
                  </p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-slate-50 border border-blue-200 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Factory className="text-blue-600" size={28} />
                    <h3 className="text-xl font-semibold text-slate-900">Production Statistics</h3>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-slate-600 font-semibold">Total Production</p>
                      <p className="text-2xl font-bold text-blue-600">47,000+ Tanks</p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-600 font-semibold">Countries Operating</p>
                      <p className="text-2xl font-bold text-blue-600">60+ Nations</p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-600 font-semibold">Service Period</p>
                      <p className="text-2xl font-bold text-blue-600">1973 - Present</p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-600 font-semibold">Primary Manufacturer</p>
                      <p className="text-lg font-semibold text-slate-900">Uralvagonzavod, Russia</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-slate-900 mb-10">Timeline of Evolution</h3>
              {timelineEvents.map((event, idx) => (
                <div key={idx} className="flex gap-8">
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className="w-6 h-6 bg-blue-600 rounded-full ring-4 ring-blue-100 shadow-md" />
                    {idx !== timelineEvents.length - 1 && (
                      <div className="w-1 h-48 bg-gradient-to-b from-blue-600/40 to-blue-200/20 mt-2" />
                    )}
                  </div>
                  <div className="pb-4 flex-1">
                    <div className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-all hover:border-blue-300">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <span className="text-3xl font-bold text-blue-600">{event.year}</span>
                          <h4 className="text-2xl font-semibold text-slate-900 mt-2">{event.title}</h4>
                        </div>
                      </div>
                      <p className="text-slate-700 leading-relaxed mb-4">{event.description}</p>
                      <div className="flex gap-2 flex-wrap">
                        {event.highlights.map((highlight, hidx) => (
                          <span key={hidx} className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-blue-50 border border-slate-200 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Award className="text-blue-600" size={32} />
                <h3 className="text-3xl font-bold text-slate-900">Global Legacy & Impact</h3>
              </div>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">{advancedContent.legacy}</p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-6 border border-slate-100">
                  <h4 className="font-semibold text-slate-900 mb-3 text-lg">Military Innovation</h4>
                  <p className="text-slate-700 text-sm leading-relaxed">The autoloader technology became the industry standard, adopted by subsequent Soviet tanks and influencing Western tank designers. The philosophy of simplicity and reliability reshaped global tank design discourse.</p>
                </div>
                <div className="bg-white rounded-lg p-6 border border-slate-100">
                  <h4 className="font-semibold text-slate-900 mb-3 text-lg">Combat Heritage</h4>
                  <p className="text-slate-700 text-sm leading-relaxed">The T-72 has seen active combat across multiple continents—Middle East, Eastern Europe, Central Asia, and North Africa. Each conflict provided valuable operational data for subsequent upgrades and refinements.</p>
                </div>
                <div className="bg-white rounded-lg p-6 border border-slate-100">
                  <h4 className="font-semibold text-slate-900 mb-3 text-lg">Technological Evolution</h4>
                  <p className="text-slate-700 text-sm leading-relaxed">Modern T-72B3M variants incorporate thermal imaging, digital fire control, and advanced communications while maintaining basic compatibility with 1970s variants, demonstrating exceptional forward-thinking engineering.</p>
                </div>
                <div className="bg-white rounded-lg p-6 border border-slate-100">
                  <h4 className="font-semibold text-slate-900 mb-3 text-lg">Economic Significance</h4>
                  <p className="text-slate-700 text-sm leading-relaxed">As one of the most exported weapons systems, the T-72 shaped global military economics for 50 years, representing Soviet engineering excellence and industrial capacity on the world stage.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-8 text-white">
              <h3 className="text-3xl font-bold mb-6">Production & Manufacturing History</h3>
              <p className="text-slate-100 leading-relaxed text-lg">{advancedContent.production}</p>
            </div>

            <div className="rounded-xl overflow-hidden border border-slate-200 shadow-lg">
              <div className="aspect-video bg-slate-900">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/Dju78OL_Tok"
                  title="T-72 Tank Documentary"
                  frameBorder="0"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        )}

        {activeTab === 'philosophy' && (
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Engineering & Design Philosophy</h2>
              <p className="text-lg text-slate-700 leading-relaxed">The T-72 represents a deliberately different approach to tank design compared to contemporary Western designs. Rather than incorporating cutting-edge technology for its own sake, the Soviet designers prioritized reliability, cost-effectiveness, and operational practicality. Every design decision reflected deep understanding of Soviet operational requirements and industrial constraints.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {designPhilosophy.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white border border-slate-200 rounded-xl p-8 hover:shadow-lg transition-all hover:border-blue-300"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <IconComponent className="text-blue-600" size={32} />
                      <h3 className="text-2xl font-semibold text-slate-900">{item.title}</h3>
                    </div>
                    <p className="text-slate-700 leading-relaxed mb-4">{item.content}</p>
                    <div className="space-y-2">
                      {item.details.map((detail, didx) => (
                        <div key={didx} className="flex items-start gap-3">
                          <span className="text-blue-600 font-bold">•</span>
                          <span className="text-slate-600 text-sm">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-slate-50 border border-slate-200 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Design Approach Comparison</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-6 border border-slate-100">
                  <h4 className="font-semibold text-slate-900 mb-3">T-72 Philosophy</h4>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex items-center gap-2"><span className="text-green-600">✓</span> Mechanical simplicity</li>
                    <li className="flex items-center gap-2"><span className="text-green-600">✓</span> Cost-effective production</li>
                    <li className="flex items-center gap-2"><span className="text-green-600">✓</span> Field-maintainable</li>
                    <li className="flex items-center gap-2"><span className="text-green-600">✓</span> Proven components</li>
                    <li className="flex items-center gap-2"><span className="text-green-600">✓</span> Mass production focus</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-6 border border-slate-100">
                  <h4 className="font-semibold text-slate-900 mb-3">Western Approach</h4>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex items-center gap-2"><span className="text-orange-600">→</span> Advanced electronics</li>
                    <li className="flex items-center gap-2"><span className="text-orange-600">→</span> Premium performance</li>
                    <li className="flex items-center gap-2"><span className="text-orange-600">→</span> Sophisticated systems</li>
                    <li className="flex items-center gap-2"><span className="text-orange-600">→</span> Higher unit cost</li>
                    <li className="flex items-center gap-2"><span className="text-orange-600">→</span> Limited production</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-6 border border-slate-100">
                  <h4 className="font-semibold text-slate-900 mb-3">Result</h4>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex items-center gap-2"><span className="text-blue-600">►</span> 47,000+ produced</li>
                    <li className="flex items-center gap-2"><span className="text-blue-600">►</span> 50-year service life</li>
                    <li className="flex items-center gap-2"><span className="text-blue-600">►</span> 60+ countries operate</li>
                    <li className="flex items-center gap-2"><span className="text-blue-600">►</span> Continuous upgrades</li>
                    <li className="flex items-center gap-2"><span className="text-blue-600">►</span> Economic advantage</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'specs' && (
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Technical Specifications</h2>
              <p className="text-lg text-slate-700 leading-relaxed">The T-72 was engineered to achieve an optimal balance between firepower, protection, and mobility. Every specification reflects careful design trade-offs aligned with Soviet military doctrine and operational requirements.</p>
            </div>

            {['Dimensions', 'Personnel', 'Armament', 'Powerplant', 'Performance', 'Protection', 'Firepower'].map((category) => (
              <div key={category}>
                <h3 className="text-2xl font-semibold text-slate-900 mb-4 flex items-center gap-2">
                  <div className="w-1 h-8 bg-blue-600 rounded" />
                  {category}
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {specifications.filter(s => s.category === category).map((spec, i) => (
                    <div
                      key={i}
                      className="bg-gradient-to-br from-slate-50 to-blue-50 border border-slate-200 rounded-lg p-4 hover:shadow-md transition-all hover:border-blue-300"
                    >
                      <div className="text-xs font-bold text-slate-600 mb-2 uppercase tracking-wider">
                        {spec.label}
                      </div>
                      <div className="text-2xl font-bold text-blue-600">{spec.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <div className="bg-white border border-slate-200 rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-slate-900 mb-6">Specification Details & Context</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-4 text-lg">Physical Characteristics</h4>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    The T-72 maintains a compact profile relative to its combat mass. The hull is 9.53 meters long, width of 3.59 meters, and height of 2.23 meters. These dimensions provide a small target signature while accommodating a three-person crew. The combat weight of 41.5 tonnes represents an optimal balance—sufficient mass for armor protection while maintaining acceptable mobility. The tank\'s length allows it to negotiate narrow bridge and urban passages. The relatively low profile reduces exposure to anti-tank weapons in defensive positions.
                  </p>
                  <h4 className="font-semibold text-slate-900 mb-4 text-lg">Powerplant & Performance</h4>
                  <p className="text-slate-700 leading-relaxed">
                    The V-46-6 diesel engine produces 840 horsepower, providing a power-to-weight ratio of 20.2 hp/tonne. This enables rapid acceleration from stationary to maximum speed. The maximum speed of 60 km/h allows rapid operational movement and tactical repositioning. The operational range of 460 kilometers on internal fuel provides strategic mobility across Central European terrain. Fuel can be supplemented by external tanks for extended range operations. The diesel engine operates reliably in extreme cold—critical for Soviet military requirements in harsh climates.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-4 text-lg">Firepower & Armament</h4>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    The primary 125mm 2A46 gun fires multiple round types at rates of 6-8 rounds per minute sustained by the autoloader. This rate of fire significantly exceeds manual-loading tanks of equivalent crew size. The gun is fully stabilized in elevation and traverse, enabling accurate fire while the tank maneuvers. The 125mm caliber provides substantial firepower against contemporary armor at typical engagement ranges. Secondary armament includes a 7.62mm coaxial gun and 12.7mm anti-aircraft gun, enabling engagement of light targets and air defense. The autoloader carries 22-28 rounds internally with provisions for additional external stowage.
                  </p>
                  <h4 className="font-semibold text-slate-900 mb-4 text-lg">Armor & Protection</h4>
                  <p className="text-slate-700 leading-relaxed">
                    Composite armor construction combines steel and ceramic materials for superior protection-to-weight ratio. The frontal glacis plate is heavily sloped, increasing effective thickness against kinetic threats. The turret front features maximum armor thickness where threats are most probable. Side skirts provide protection against shaped-charge warheads. The NBC filtration system protects against nuclear radiation, chemical agents, and biological contaminants, critical for Cold War-era operations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'capabilities' && (
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Combat Capabilities & Systems</h2>
              <p className="text-lg text-slate-700 leading-relaxed">The T-72 integrates four primary combat capability domains: devastating firepower through its main gun system, sophisticated fire control enabling accurate engagement, comprehensive armor protection, and exceptional mobility across varied terrain. Each system is optimized for integration with Soviet military doctrine.</p>
            </div>

            <div className="space-y-6">
              {capabilities.map((cap, i) => {
                const IconComponent = cap.icon;
                return (
                  <div key={i} className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg transition-all">
                    <div className="grid md:grid-cols-3 gap-0">
                      <div className="relative h-64 md:h-80 overflow-hidden bg-slate-900">
                        <img src={cap.image} alt={cap.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                        <div className="absolute top-4 right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg">
                          <IconComponent size={24} />
                        </div>
                      </div>

                      <div className="md:col-span-2 p-8">
                        <h3 className="text-3xl font-bold text-slate-900 mb-3">{cap.title}</h3>
                        <p className="text-lg text-slate-700 leading-relaxed mb-6">{cap.description}</p>

                        <div className="mb-6">
                          <h4 className="font-semibold text-slate-900 mb-4 text-base">Key Features:</h4>
                          <div className="grid grid-cols-2 gap-3">
                            {cap.features.map((f, idx) => (
                              <div key={idx} className="flex items-start gap-2">
                                <span className="text-blue-600 font-bold mt-0.5">•</span>
                                <span className="text-slate-700 text-sm">{f}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="bg-gradient-to-br from-blue-50 to-slate-50 border border-blue-200 rounded-lg p-4">
                          <p className="text-slate-700 text-sm leading-relaxed">{cap.content}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-8 text-white">
              <h3 className="text-3xl font-bold mb-6">Integrated Combat Systems</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold mb-4 text-blue-300">System Integration Philosophy</h4>
                  <p className="text-slate-100 leading-relaxed mb-6">
                    All T-72 systems are integrated to support rapid targeting and accurate fire. Sensor inputs (rangefinder, thermal imager) feed into the ballistic computer, which calculates firing solutions. The fire control system automatically computes corrections for weapon cant, ammunition type, atmospheric conditions, and gun/ammunition wear. Modern digital variants automate this process completely. Crew interface is simplified—the gunner designates targets, and the system handles ballistic calculations. This integration reduces operator workload and increases engagement speed.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-4 text-blue-300">Evolution of Systems</h4>
                  <p className="text-slate-100 leading-relaxed">
                    Early T-72 models relied on mechanical fire control and crew estimation. T-72B variants incorporated analog computers and thermal imaging. Modern T-72B3M versions feature digital fire control, thermal targeting, and networked systems. This evolutionary approach demonstrates how the basic platform accommodates technological advancement. Modern upgrades add digital systems without requiring complete redesign, proving the soundness of fundamental architecture.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TankOverview;