// src/data.tsx

interface CombatCategory {
  id: string;
  title: string;
  summary: string;
  content: string;
}

export const combatCategories: CombatCategory[] = [
  {
    id: "damage-types",
    title: "Damage Types and Resistances",
    summary: "Learn about the three damage types and five resistance tiers that affect combat outcomes.",
    content: `
      <div>
        <h4>Damage Types</h4>
        <p>Limbus Company features three primary damage types:</p>
        <ul>
          <li><strong>Slash</strong>: Cutting damage, typically from blades and swords</li>
          <li><strong>Pierce</strong>: Penetrating damage, typically from guns and spears</li>
          <li><strong>Blunt</strong>: Impact damage, typically from hammers and clubs</li>
        </ul>
        
        <h4>Resistance Tiers</h4>
        <p>Each unit has varying resistances to different damage types and Sin affinities:</p>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>Tier</th>
              <th>Multiplier</th>
              <th>Effect</th>
            </tr>
          </thead>
          <tbody>
            <tr class="table-danger">
              <td><strong>Fatal</strong></td>
              <td>2.0x</td>
              <td>Double damage</td>
            </tr>
            <tr class="table-warning">
              <td><strong>Weak</strong></td>
              <td>1.5x</td>
              <td>50% increased damage</td>
            </tr>
            <tr>
              <td><strong>Normal</strong></td>
              <td>1.0x</td>
              <td>Standard damage</td>
            </tr>
            <tr class="table-info">
              <td><strong>Endure</strong></td>
              <td>0.5x</td>
              <td>Half damage</td>
            </tr>
            <tr class="table-success">
              <td><strong>Ineffective</strong></td>
              <td>0.25x</td>
              <td>Quarter damage</td>
            </tr>
          </tbody>
        </table>
        
        <div class="alert alert-info">
          <strong>Important:</strong> Damage calculations multiply both damage type and Sin affinity resistances. For example, a Slash/Wrath skill dealing 100 base damage against an enemy with Weak Slash (1.5x) and Endure Wrath (0.5x) would deal 75 damage (100 × 1.5 × 0.5).
        </div>
      </div>
    `
  },
  {
    id: "sin-affinities",
    title: "Sin Affinities and Resonance",
    summary: "Understand the seven Sin affinities and how skill chaining affects combat power.",
    content: `
      <div>
        <h4>Sin Affinities</h4>
        <p>Every skill is aligned with one of seven Sin affinities:</p>
        <ul>
          <li><span class="badge bg-danger text-white">Wrath (Red)</span>: Aggressive, direct damage</li>
          <li><span class="badge text-white" style="background-color: #FF8C00">Lust (Orange)</span>: Speed and evasion</li>
          <li><span class="badge bg-warning text-dark">Sloth (Yellow)</span>: Defensive and healing</li>
          <li><span class="badge bg-success text-white">Gluttony (Green)</span>: Resource generation</li>
          <li><span class="badge bg-primary text-white">Gloom (Blue)</span>: Utility and control</li>
          <li><span class="badge bg-purple text-white">Pride (Purple)</span>: Power enhancement</li>
          <li><span class="badge text-white" style="background-color: #FF69B4">Envy (Pink)</span>: Copying and stealing abilities</li>
        </ul>
        
        <h4>Resonance</h4>
        <p>Chaining skills of the same Sin affinity creates Resonance:</p>
        <ul>
          <li>Chaining 2+ skills of the same Sin affinity increases skill potency</li>
          <li>The deeper in the chain, the stronger the resonance bonus</li>
          <li>Visual indicators show active resonance (glowing skills)</li>
        </ul>
        
        <h4>Absolute Resonance</h4>
        <p>Chaining 3+ skills with different Sin affinities in succession triggers Absolute Resonance:</p>
        <ul>
          <li>Boosts overall skill power regardless of Sin type</li>
          <li>Provides additional combat benefits for specialized teams</li>
          <li>Creates strategic depth through careful skill sequencing</li>
        </ul>
        
        <div class="alert alert-primary">
          <strong>Strategic Tip:</strong> Plan your skill sequences to maximize resonance effects. Some Sinners specialize in specific Sin affinities, making them ideal for resonance-based strategies.
        </div>
      </div>
    `
  },
  {
    id: "sanity",
    title: "Sanity System",
    summary: "Learn how the sanity mechanic affects coin flips and E.G.O skill control.",
    content: `
      <div>
        <h4>Sanity Range</h4>
        <p>Sanity is a crucial combat mechanic that ranges from -45 to +45:</p>
        <ul>
          <li>All Sinners start battles at 0 sanity</li>
          <li>Sanity affects coin flip outcomes and skill control</li>
          <li>The sanity bar is visible at the top of the combat interface</li>
        </ul>
        
        <h4>Sanity Effects</h4>
        <div class="row">
          <div class="col-md-4">
            <div class="card border-success mb-3">
              <div class="card-header bg-success text-white">Positive Sanity</div>
              <div class="card-body bg-dark">
                <p class="card-text">Improves coin flip odds, making heads results more likely</p>
                <p class="card-text">Greater control over E.G.O skills</p>
                <p class="card-text">Optimal combat performance</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card border-warning mb-3">
              <div class="card-header bg-warning">Zero Sanity</div>
              <div class="card-body bg-dark">
                <p class="card-text">Normal coin flip odds (50/50)</p>
                <p class="card-text">Standard E.G.O skill control</p>
                <p class="card-text">Balanced performance</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card border-danger mb-3">
              <div class="card-header bg-danger text-white">Negative Sanity</div>
              <div class="card-body bg-dark">
                <p class="card-text">Worsens coin flip odds, making tails results more likely</p>
                <p class="card-text">Risk of losing control (at -45, Sinners use E.G.O skills randomly)</p>
                <p class="card-text">May target allies with attacks</p>
              </div>
            </div>
          </div>
        </div>
        
        <h4>Sanity Changes</h4>
        <ul>
          <li><strong>+1 Sanity</strong>: Winning a clash or when an enemy dies</li>
          <li><strong>-1 Sanity</strong>: Losing a clash or when an ally dies</li>
          <li><strong>-10 to -20 Sanity</strong>: Using E.G.O skills (varies by skill)</li>
        </ul>
        
        <div class="alert alert-warning">
          <strong>Strategic Management:</strong> Maintaining positive sanity is essential for optimal performance. Prioritize winning clashes and defeating enemies quickly to keep sanity high.
        </div>
      </div>
    `
  },
  {
    id: "skill-system",
    title: "Skill System and Coin Mechanics",
    summary: "Explore how skills function and how coin flips determine combat outcomes.",
    content: `
      <div>
        <h4>Skill Types</h4>
        <p>Skills fall into three main categories:</p>
        <ul>
          <li><strong>Attack Skills</strong>: Deal damage to enemies</li>
          <li><strong>Defense Skills</strong>: Protect against incoming damage</li>
          <li><strong>E.G.O Skills</strong>: Powerful abilities that drain sanity</li>
        </ul>
        
        <h4>Coin Mechanics</h4>
        <p>Each skill has two components that determine its power:</p>
        <ul>
          <li><strong>Base Power</strong>: The skill's minimum guaranteed power</li>
          <li><strong>Coins</strong>: Additional potential power through coin flips</li>
        </ul>
        
        <div class="card mb-3">
          <div class="card-header bg-warning">Example Skill</div>
          <div class="card-body bg-dark">
            <p><strong>Horizontal Slash</strong></p>
            <p><strong>Base Power</strong>: 6</p>
            <p><strong>Coins</strong>: 2 (+4 power each)</p>
            <p><strong>Total Power Range</strong>: 6-14 (depending on coin flips)</p>
            <ul>
              <li>If both coins land heads: 6 + 4 + 4 = 14 power</li>
              <li>If one coin lands heads: 6 + 4 = 10 power</li>
              <li>If no coins land heads: 6 power</li>
            </ul>
          </div>
        </div>
        
        <h4>Sanity's Effect on Coins</h4>
        <p>Sanity directly influences coin flip outcomes:</p>
        <ul>
          <li>At +45 sanity: ~95% chance for heads</li>
          <li>At 0 sanity: 50% chance for heads</li>
          <li>At -45 sanity: ~5% chance for heads</li>
        </ul>
        
        <h4>Success Probability</h4>
        <p>In clashes, the unit with higher total power (base + coin outcomes) wins, negating the opponent's skill effects. This makes predicting and manipulating power values through sanity management crucial for success.</p>
        
        <div class="alert alert-info">
          <strong>Planning Tip:</strong> When deciding which skills to use, consider both the base power and potential coin outcomes based on your current sanity level.
        </div>
      </div>
    `
  },
  {
    id: "clashes",
    title: "Clashes and Combat Flow",
    summary: "Understand turn order, combat timing, and the clash system.",
    content: `
      <div>
        <h4>Combat Flow</h4>
        <p>Each combat turn follows this sequence:</p>
        <ol>
          <li>Speed determination (random roll for each unit)</li>
          <li>Unit actions based on speed (highest first)</li>
          <li>Skill selection and targeting</li>
          <li>Skill clashes and resolution</li>
          <li>Effect application (damage, buffs, etc.)</li>
          <li>End of turn processing</li>
        </ol>
        
        <h4>Clashes</h4>
        <p>When opposing skills target each other, they enter a clash:</p>
        <ul>
          <li>Both skills reveal their power (base + coin flips)</li>
          <li>Higher power skill wins the clash</li>
          <li>Winning skill applies its effects normally</li>
          <li>Losing skill is negated (no effects applied)</li>
          <li>The clash winner gains +1 sanity</li>
          <li>The clash loser loses -1 sanity</li>
        </ul>
        
        <div class="card mb-3">
          <div class="card-header bg-warning">Clash Example</div>
          <div class="card-body bg-dark">
            <div class="row">
              <div class="col-md-5 border-end">
                <p><strong>Yi Sang's Slash Skill</strong></p>
                <p>Base Power: 5</p>
                <p>Coins: 2 (+3 each)</p>
                <p>Coin Results: Heads, Tails</p>
                <p>Total Power: 5 + 3 = 8</p>
              </div>
              <div class="col-md-5 offset-md-2">
                <p><strong>Enemy Block Skill</strong></p>
                <p>Base Power: 4</p>
                <p>Coins: 2 (+2 each)</p>
                <p>Coin Results: Heads, Heads</p>
                <p>Total Power: 4 + 2 + 2 = 8</p>
              </div>
            </div>
            <div class="alert alert-secondary mt-3">
              Result: Tie (8 vs 8). In case of ties, the side with higher speed wins the clash.
            </div>
          </div>
        </div>
        
        <h4>Encounter Types</h4>
        <p>Limbus Company features two main combat encounter types:</p>
        <ul>
          <li><strong>General Encounters</strong>: Skills auto-target the nearest enemy</li>
          <li><strong>Focused Encounters</strong> (vs. Abnormalities): Players choose targets and clash skills directly</li>
        </ul>
        
        <div class="alert alert-primary">
          <strong>Strategic Depth:</strong> Understanding turn order and clash mechanics allows you to manipulate encounters in your favor, setting up advantageous clashes.
        </div>
      </div>
    `
  },
  {
    id: "stagger",
    title: "Stagger Mechanic",
    summary: "Learn how the stagger system creates strategic vulnerability windows.",
    content: `
      <div>
        <h4>Stagger System</h4>
        <p>Each unit's health bar contains stagger thresholds (indicated by markers):</p>
        <ul>
          <li>When damage crosses a threshold, the unit becomes staggered</li>
          <li>Staggered units skip their next turn</li>
          <li>All resistances become Fatal (2x damage) while staggered</li>
          <li>Stagger recovery is automatic after one turn</li>
        </ul>
        
        <div class="card mb-3">
          <div class="card-body bg-dark">
            <h5 class="card-title">Stagger Visualization</h5>
            <div class="progress mb-2" style="height: 30px;">
              <div class="progress-bar bg-danger" role="progressbar" style="width: 100%;" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                100% HP
              </div>
            </div>
            <div class="d-flex justify-content-between">
              <span>|</span>
              <span>|</span>
              <span>|</span>
              <span>|</span>
            </div>
            <div class="d-flex justify-content-between text-white">
              <span>Stagger<br>Point 1</span>
              <span>Stagger<br>Point 2</span>
              <span>Stagger<br>Point 3</span>
              <span>Death</span>
            </div>
          </div>
        </div>
        
        <h4>Strategic Implications</h4>
        <p>The stagger system creates crucial tactical opportunities:</p>
        <ul>
          <li><strong>Damage Windows</strong>: Focus fire to stagger enemies and deal double damage</li>
          <li><strong>Turn Denial</strong>: Staggering prevents enemies from acting, creating safe opportunities</li>
          <li><strong>Defensive Planning</strong>: Manage your health to avoid crossing stagger thresholds during critical moments</li>
        </ul>
        
        <div class="alert alert-warning">
          <strong>Boss Strategy:</strong> Many boss fights revolve around managing stagger timing. Coordinate your team to stagger bosses during their powerful attack phases.
        </div>
      </div>
    `
  },
  {
    id: "ego",
    title: "E.G.O Skills and Corrosion",
    summary: "Discover the powerful E.G.O system and managing corrosion risks.",
    content: `
      <div>
        <h4>E.G.O Skills</h4>
        <p>E.G.O skills are highly powerful abilities that come with significant costs:</p>
        <ul>
          <li>Drastically higher base power and coin values than standard skills</li>
          <li>Each use drains 10-20 sanity (varies by skill)</li>
          <li>Unique effects not available through standard skills</li>
          <li>Can target multiple enemies or apply powerful buffs/debuffs</li>
        </ul>
        
        <h4>Corrosion Risk</h4>
        <p>Using E.G.O skills at low sanity is risky:</p>
        <ul>
          <li>At negative sanity levels, E.G.O use may trigger corrosion</li>
          <li>Corroded Sinners use skills without player control</li>
          <li>May target allies as well as enemies</li>
          <li>At -45 sanity, Sinners automatically use E.G.O skills indiscriminately</li>
        </ul>
        
        <div class="card mb-3 bg-warning">
          <div class="card-header">Sanity Risk Levels</div>
          <div class="card-body bg-dark">
            <div class="row">
              <div class="col-md-4">
                <div class="alert alert-success">
                  <strong>Safe Zone: +10 to +45</strong>
                  <p>E.G.O can be used safely without corrosion risk</p>
                </div>
              </div>
              <div class="col-md-4">
                <div class="alert alert-warning">
                  <strong>Caution Zone: -10 to +9</strong>
                  <p>Low risk of corrosion, use E.G.O carefully</p>
                </div>
              </div>
              <div class="col-md-4">
                <div class="alert alert-danger">
                  <strong>Danger Zone: -11 to -45</strong>
                  <p>High risk of corrosion, avoid E.G.O if possible</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <h4>Strategic Balance</h4>
        <p>E.G.O management creates a risk-reward dynamic:</p>
        <ul>
          <li>Early E.G.O use provides immediate power but risks later instability</li>
          <li>Conservative E.G.O use maintains control but may extend difficult encounters</li>
          <li>Some Sinners have passives that help manage sanity effects</li>
        </ul>
        
        <div class="alert alert-primary">
          <strong>Advanced Tactic:</strong> In some cases, intentionally corrosion a Sinner can be beneficial if their automatic E.G.O skills align with your strategy.
        </div>
      </div>
    `
  },
  {
    id: "dashboard",
    title: "Dashboard and Skill Management",
    summary: "Master the skill dashboard system to optimize your combat choices.",
    content: `
      <div>
        <h4>Skill Dashboard</h4>
        <p>The combat interface features a skill dashboard with the following characteristics:</p>
        <ul>
          <li>Initially displays one skill column per deployed Sinner</li>
          <li>Each turn adds one column to a random Sinner (up to 12 total)</li>
          <li>Skills are randomly drawn from each Sinner's available skillset</li>
          <li>Used skills are discarded until the Sinner's pool is depleted, then refreshed</li>
        </ul>
        
        <div class="card mb-3 bg-warning">
          <div class="card-header ">Dashboard Visualization</div>
          <div class="card-body bg-dark">
            <div class="row">
              <div class="col text-center p-2">
                <strong>Don Quixote</strong><br>
                <span class="badge bg-danger text-white">Slash</span><br>
                <span class="badge bg-danger text-white">Counter</span>
              </div>
              <div class="col text-center p-2">
                <strong>Ryōshū</strong><br>
                <span class="badge bg-primary text-white">Block</span><br>
                <span class="badge bg-success text-white">Heal</span><br>
                <span class="badge bg-warning text-dark">Buff</span>
              </div>
              <div class="col text-center p-2">
                <strong>Hong Lu</strong><br>
                <span class="badge text-white" style="background-color: #FF8C00">Pierce</span><br>
                <span class="badge text-white" style="background-color: #FF8C00">Speed Up</span>
              </div>
              <div class="col text-center p-2">
                <strong>Faust</strong><br>
                <span class="badge bg-primary text-white">Blunt</span><br>
                <span class="badge bg-primary text-white">Debuff</span><br>
                <span class="badge bg-danger text-white">E.G.O</span>
              </div>
              <div class="col text-center p-2">
                <strong>Ishmael</strong><br>
                <span class="badge text-white" style="background-color: #FF69B4">Pierce</span><br>
                <span class="badge text-white" style="background-color: #FF69B4">Copy</span>
              </div>
            </div>
          </div>
        </div>
        
        <h4>Skill Cycling</h4>
        <p>Understanding skill cycling helps with combat planning:</p>
        <ul>
          <li>Each Sinner has unique skill distributions (e.g., more Attack vs. Defense skills)</li>
          <li>Skill pools refresh when depleted, making skill usage predictable over time</li>
          <li>Saving critical skills for key moments while using others strategically</li>
        </ul>
        
        <h4>Resource Management</h4>
        <p>The dashboard creates a resource management challenge:</p>
        <ul>
          <li>Limited options each turn require careful prioritization</li>
          <li>Extra columns for specific Sinners create tactical opportunities</li>
          <li>Managing both immediate needs and planning for future turns</li>
        </ul>
        
        <div class="alert alert-info">
          <strong>Advanced Play:</strong> Experienced players track skill usage to predict when specific skills will reappear in rotation, planning several turns in advance.
        </div>
      </div>
    `
  },
  {
    id: "team-comp",
    title: "Team Composition and Strategy",
    summary: "Build effective teams by understanding Sinner roles, synergies, and encounter demands.",
    content: `
    <div>
      <h4>Team Structure</h4>
      <p>Limbus Company team composition follows these guidelines:</p>
      <ul>
        <li>Deploy 5-7 Sinners per encounter (varies by mission)</li>
        <li>Non-deployed Sinners provide passive support benefits</li>
        <li>Balance roles: tanks, supports, damage dealers, and status specialists</li>
      </ul>
      
      <h4>Team Building Principles</h4>
      <div class="row mb-3">
        <div class="col-md-6">
          <div class="card h-100">
            <div class="card-header bg-danger text-white">Offensive Considerations</div>
            <div class="card-body bg-dark">
              <ul>
                <li>Match damage types (slash, pierce, blunt) to enemy weaknesses</li>
                <li>Balance Sin affinities (e.g., Wrath, Lust) for resonance chains</li>
                <li>Mix single-target and AoE damage dealers</li>
                <li>Plan burst damage to stagger enemies</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card h-100">
            <div class="card-header bg-info text-white">Defensive Considerations</div>
            <div class="card-body bg-dark">
              <ul>
                <li>Include sanity buffs to improve clash odds</li>
                <li>Use tanks and supports for healing/shielding</li>
                <li>Match resistances to enemy Sin affinities</li>
                <li>Plan sustain with E.G.O for long fights</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <h4>Common Team Archetypes</h4>
      <div class="accordion" id="teamArchetypes">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Aggressive Burst Team
            </button>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#teamArchetypes">
            <div class="accordion-body">
              <ul>
                <li>Maximizes damage with multiple damage dealers</li>
                <li>Uses identities like [Blade Lineage Mentor] Meursault or [R Corp. 4th Pack Rabbit] Heathcliff</li>
                <li>Focuses on resonance and stagger for quick wins</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Defensive Support Team
            </button>
          </h2>
          <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#teamArchetypes">
            <div class="accordion-body">
              <ul>
                <li>Prioritizes survival with tanks and supports</li>
                <li>Includes identities like [Dieci Assoc. South Section 4] Rodion and [The One Who Grips] Faust</li>
                <li>Uses healing and debuffs to outlast enemies</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingThree">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Balanced Team
            </button>
          </h2>
          <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#teamArchetypes">
            <div class="accordion-body">
              <ul>
                <li>Combines one tank, one support, and 3 damage/status specialists</li>
                <li>Example: [Zwei Assoc. West Section 3] Ishmael (tank), [The Princess of La Manchaland] Rodion (support), [Full-Stop Office Fixer] Heathcliff (damage)</li>
                <li>Adapts to varied encounters with flexibility</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingFour">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
              Status-Focused Team
            </button>
          </h2>
          <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#teamArchetypes">
            <div class="accordion-body">
              <ul>
                <li>Weakens enemies with status effects</li>
                <li>Uses identities like [Lobotomy E.G.O::Solemn Lament] Yi Sang and [MultiCrack Office Fixer] Heathcliff</li>
                <li>Pairs with a tank and support for control</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div class="alert alert-warning">
        <strong>Strategic Tip:</strong> Adapt teams to enemy weaknesses and available identities. Sin affinity synergy and role balance are key to mastering combat.
      </div>
    </div>
  `
  }
];

interface Sinner {
  id: string;
  name: string;
  image: string;
  background: string;
  combatRole: string;
  sinAffinities: string[];
  keyAbilities: {
    name: string;
    type: string;
    effect: string;
  }[];
  passives: {
    name: string;
    effect: string;
  }[];
  teamSynergy: string;
}

export const sinners: Sinner[] = [
  {
    id: "yi-sang",
    name: "Yi Sang",
    image: "/api/placeholder/200/300",
    background: "Formerly the youngest chief researcher at N Corp., Yi Sang invented the Mirror and joined Limbus Company after defecting due to ethical concerns.",
    combatRole: "Ranged attacker, focusing on debuffs like Sinking, with skills that deal damage over time.",
    sinAffinities: ["Gloom", "Sloth", "Envy"],
    keyAbilities: [
      { name: "Deflect", type: "Slash", effect: "Inflicts 2 Sinking on hit." },
      { name: "End-stop Stab", type: "Pierce", effect: "Inflicts Sinking and Attack Power Down if at high speed." },
      { name: "Enjamb", type: "Slash", effect: "Inflicts Sinking and Fragile if target's SP is low." },
      { name: "Guard", type: "Guard", effect: "Provides defense, gains Gloom affinity at Uptie 4." }
    ],
    passives: [
      { name: "A Nudge to Get Started", effect: "At combat start, applies 3 Haste to self and 3 allies placed after him." },
      { name: "Information Relay", effect: "With 3 Gloom Resonances, applies 1 Damage Up to 2 allies placed after him." },
      { name: "Information Neutralization", effect: "With 4 Gloom Owned, heals 10 SP for 1 ally with the least SP if they lost SP." }
    ],
    teamSynergy: "Works well with Sinners benefiting from Sinking debuffs or needing SP healing, enhancing team sustainability."
  },
  {
    id: "faust",
    name: "Faust",
    image: "/api/placeholder/200/300",
    background: "Developed Mephistopheles, the bus for Limbus Company. She recruited other Sinners and focuses on retrieving Golden Boughs.",
    combatRole: "Melee attacker with Blunt and Pierce skills, applying debuffs like Paralyze and Offense Level Down.",
    sinAffinities: ["Lust", "Pride", "Envy"],
    keyAbilities: [
      { name: "Downward Slash", type: "Blunt", effect: "Inflicts 1 Paralyze on hit." },
      { name: "Upward Slash", type: "Blunt", effect: "Inflicts 3 Offense Level Down next turn on hit." },
      { name: "Drilling Stab", type: "Pierce", effect: "Inflicts Attack Power Down on hit." },
      { name: "Evade", type: "Evade", effect: "Gains Pride affinity at Uptie 4, no additional effects." }
    ],
    passives: [
      { name: "Analytic Eye", effect: "With 2 Pride Resonances, deals +10% damage to units with negative status effects." },
      { name: "Keen Observation", effect: "With 3 Pride Owned, 1 ally with highest Max HP inflicts 2 Offense Level Down at 25% chance." }
    ],
    teamSynergy: "Pairs effectively with Sinners applying status effects, maximizing her Analytic Eye passive for increased damage."
  },
  {
    id: "don-quixote",
    name: "Don Quixote",
    image: "/api/placeholder/200/300",
    background: "Real name Sancho, a Bloodfiend with a knightly persona. His past involves serving as an enforcer and erasing memories in the River of Oblivion.",
    combatRole: "Melee attacker with Pierce skills, focusing on clash wins and Bleed effects, reflecting his knightly ideals.",
    sinAffinities: ["Lust", "Pride", "Envy"],
    keyAbilities: [
      { name: "Joust", type: "Pierce", effect: "Clash Win gives 2 Haste." },
      { name: "Galloping Tilt", type: "Pierce", effect: "Clash Win gives 2 Attack Power Up, Heads Hit inflicts 2 Bleed." },
      { name: "For Justice!", type: "Pierce", effect: "At 10+ Speed, Coin Power +2, Heads Hit inflicts Bleed." },
      { name: "Evade", type: "Evade", effect: "Gains Lust affinity at Uptie 4, no additional effects." }
    ],
    passives: [
      { name: "Righteous Retribution", effect: "With Lust Resonances, skills deal +10% damage in a won clash." },
      { name: "Support", effect: "With Lust Owned, 1 ally with most SP deals +10% Pierce damage." }
    ],
    teamSynergy: "Effective in teams needing Haste and Attack Power Up, enhancing clash performance with Bleed-focused allies."
  },
  {
    id: "ryoshū",
    name: "Ryōshū",
    image: "/api/placeholder/200/300",
    background: "Mysterious, possibly linked to the Five Fingers of the Backstreets, with knowledge of Shi Association operations, adding intrigue.",
    combatRole: "Melee attacker with Slash skills, focusing on dealing and taking increased damage for aggressive play.",
    sinAffinities: ["Lust", "Pride", "Envy"],
    keyAbilities: [
      { name: "Paint", type: "Slash", effect: "Gains 2 Poise next turn on hit." },
      { name: "Splatter", type: "Slash", effect: "+30% damage if target took damage this turn." },
      { name: "Brushstroke", type: "Slash", effect: "Gains 2 Slash DMG Up at combat start, gains 2 Poise next turn on hit." },
      { name: "Evade", type: "Evade", effect: "No additional effects." }
    ],
    passives: [
      { name: "Indiscriminate Art", effect: "With Gluttony Resonances, deal and take +25% damage." },
      { name: "Hustle", effect: "With Gluttony Resonances, 1 ally with lowest Max HP deals and takes +20% damage." }
    ],
    teamSynergy: "Works in aggressive teams, pairing with healers to mitigate increased damage taken, enhancing damage output."
  },
  {
    id: "meursault",
    name: "Meursault",
    image: "/api/placeholder/200/300",
    background: "Former N Corp. employee, contemplative, lacking strong opinions, with experiences dealing with Distortions and club visits.",
    combatRole: "Melee attacker with Blunt skills, focusing on Tremor and defense, suitable for tanking roles.",
    sinAffinities: ["Sloth", "Envy", "Gluttony"],
    keyAbilities: [
      { name: "Un, Deux", type: "Blunt", effect: "Inflicts 1 Tremor on hit." },
      { name: "Nailing Fist", type: "Blunt", effect: "Gains 3 Defense Power Up next turn, triggers Tremor Burst on hit." },
      { name: "Des Coups", type: "Blunt", effect: "Gains 3 Protection next turn, inflicts Tremor on hit." },
      { name: "Guard", type: "Guard", effect: "Gains Sloth affinity at Uptie 4, no additional effects." }
    ],
    passives: [
      { name: "Staunchness", effect: "At <50% HP, gain 1 Protection at combat phase start." },
      { name: "Backup", effect: "1 ally with highest Max HP takes -10% damage from attack skills." }
    ],
    teamSynergy: "Pairs well with tanks or healers, enhancing team defense with Tremor effects and protection."
  },
  {
    id: "hong-lu",
    name: "Hong Lu",
    image: "/api/placeholder/200/300",
    background: "From a wealthy family, based on 'Dream of the Red Chamber,' with family betrayal shaping endurance and emotional detachment.",
    combatRole: "Melee attacker with Blunt and Slash skills, focusing on Sinking and Ruptured debuffs, suited for damage-over-time strategies.",
    sinAffinities: ["Sloth", "Envy", "Pride"],
    keyAbilities: [
      { name: "Downward Cleave", type: "Blunt", effect: "Inflicts 2 Sinking on hit." },
      { name: "Dual Strike", type: "Slash", effect: "If no damage taken last turn, Coin Power +1, inflicts 2 Sinking and 2 Rupture." },
      { name: "Whirlwind", type: "Blunt", effect: "If no damage taken last turn, Coin Power +2, inflicts 2 Attack Power Down, 2 Sinking, 2 Rupture." },
      { name: "Evade", type: "Evade", effect: "Gains Sloth affinity at Uptie 4, with SP healing passives." }
    ],
    passives: [
      { name: "Entertainment", effect: "With Sloth Resonances, heal 6 SP next turn." },
      { name: "Frivolous Jokes", effect: "With Sloth Owned, at combat start, ally with least SP heals 6 SP." }
    ],
    teamSynergy: "Effective with Sinners benefiting from Sinking and Ruptured debuffs, and those needing SP healing, enhancing team longevity."
  },
  {
    id: "heathcliff",
    name: "Heathcliff",
    image: "/api/placeholder/200/300",
    background: "Former wrecker for people and property, part of the Dead Rabbits Syndicate, with a history of violence and lack of formal education.",
    combatRole: "Melee attacker with Blunt skills, focusing on Tremor and damage boosts, suited for aggressive play.",
    sinAffinities: ["Envy", "Wrath", "Pride"],
    keyAbilities: [
      { name: "Bat Bash", type: "Blunt", effect: "Inflicts 3 Tremor on hit." },
      { name: "Smackdown", type: "Blunt", effect: "Gains 1 Attack Power Up and Damage Up next turn, inflicts 2 Tremor on hit." },
      { name: "Upheaval", type: "Blunt", effect: "Next Coin +2 Power, triggers Tremor Burst on hit." },
      { name: "Counter", type: "Blunt", effect: "Dealing more damage to higher Max HP targets." }
    ],
    passives: [
      { name: "Ressentiment", effect: "With Envy Resonances, deal +10% damage to targets with higher Max HP." },
      { name: "Spite-driven", effect: "With Envy Owned, 1 ally with lowest Max HP deals +10% Blunt damage." }
    ],
    teamSynergy: "Works well with Sinners having high Max HP, enhancing damage output with Tremor effects."
  },
  {
    id: "ishmael",
    name: "Ishmael",
    image: "/api/placeholder/200/300",
    background: "Former accountant and sailor, survived a disastrous voyage hunting the Pallid Whale, adding resilience to her character.",
    combatRole: "Melee attacker with Blunt skills, focusing on Tremor and defense debuffs, suitable for tanking roles.",
    sinAffinities: ["Wrath", "Gluttony", "Gloom"],
    keyAbilities: [
      { name: "Loggerhead", type: "Blunt", effect: "Inflicts +1 Tremor on hit." },
      { name: "Slide", type: "Blunt", effect: "Clash Win inflicts 3 Defense Power Down, inflicts 3 Tremor on hit." },
      { name: "Shield Bash", type: "Blunt", effect: "Triggers Tremor Burst on hit, inflicts 1 Blunt Fragility." },
      { name: "Guard", type: "Guard", effect: "Gains Wrath affinity at Uptie 4, no additional effects." }
    ],
    passives: [
      { name: "Last-ditch Struggle", effect: "With Wrath Owned, at <25% HP, gain +1 Clash Power in a clash." },
      { name: "Determination to Survive", effect: "With Wrath Owned, 1 ally with least HP and <50% Max HP gains +1 Clash Power in a clash." }
    ],
    teamSynergy: "Effective in low HP situations, pairing with Sinners benefiting from Tremor and Defense Power Down."
  },
  {
    id: "rodion",
    name: "Rodion",
    image: "/api/placeholder/200/300",
    background: "Part of the League of Nine Littératures, a group of writers and researchers, with a past influencing her combat focus on Bleed effects.",
    combatRole: "Melee attacker with Slash skills, focusing on Bleed effects, suited for damage-over-time strategies.",
    sinAffinities: ["Wrath", "Envy", "Pride"],
    keyAbilities: [
      { name: "Strike Down", type: "Slash", effect: "Inflicts 2 Bleed on hit." },
      { name: "Axe Combo", type: "Slash", effect: "Inflicts 2 Bleed and +1 Bleed Count on hit." },
      { name: "Slay", type: "Slash", effect: "Skill power +1 below 0 SP, inflicts Bleed on hit." },
      { name: "Counter", type: "Slash", effect: "No additional effects." }
    ],
    passives: [
      { name: "Split Evil", effect: "With Wrath Owned, on hit, inflict 1 Bleed at 50% chance." },
      { name: "Gambler", effect: "With Wrath Owned, 1 ally with most HP deals +20% damage with Heads Coins." }
    ],
    teamSynergy: "Works well with Sinners applying or benefiting from Bleed, enhancing damage output with high HP allies."
  },
  {
    id: "sinclair",
    name: "Sinclair",
    image: "/api/placeholder/200/300",
    background: "From Calw, a town known for prosthetics, sheltered and naive, with a focus on breaking out of his shell, adding to his character development.",
    combatRole: "Melee attacker with Slash skills, focusing on Ruptured and attack power boosts, suitable for offensive strategies.",
    sinAffinities: ["Lust", "Pride", "Envy"],
    keyAbilities: [
      { name: "Downward Swing", type: "Slash", effect: "Inflicts 2 Rupture on hit." },
      { name: "Halberd Combo", type: "Slash", effect: "Clash Win +30% damage." },
      { name: "Ravaging Cut", type: "Slash", effect: "Clash Win gains 1 Attack Power Up, inflicts 1 Rupture on hit." },
      { name: "Counter", type: "Slash", effect: "No additional effects." }
    ],
    passives: [
      { name: "Pluckiness", effect: "With sin affinity Owned, when an ally is defeated, gain 1 Attack Power Up next turn." },
      { name: "Grudge", effect: "With sin affinity Owned, 1 ally with least SP gains 1 Attack Power Up the turn after an ally is defeated." }
    ],
    teamSynergy: "Effective in teams handling ally defeats, enhancing attack power with low SP allies."
  },
  {
    id: "outis",
    name: "Outis",
    image: "/api/placeholder/200/300",
    background: "Military veteran from the Smoke War, expert in tactics and workshop technologies, with a mysterious past.",
    combatRole: "Melee attacker with Pierce and Slash skills, focusing on Ruptured and conditional damage, suited for tactical play.",
    sinAffinities: ["Sloth", "Envy", "Pride"],
    keyAbilities: [
      { name: "Pulled Blade", type: "Pierce", effect: "Inflicts 2 Rupture on hit." },
      { name: "Backslash", type: "Slash", effect: "+20% damage if user’s speed > target’s." },
      { name: "Piercing Thrust", type: "Pierce", effect: "Inflicts +1 Rupture Count, +20% damage if target’s HP > 50%." },
      { name: "Evade", type: "Evade", effect: "No additional effects." }
    ],
    passives: [
      { name: "Executor", effect: "With Sloth Owned, if target’s SP is below 0, deal +10% damage." },
      { name: "Military Mindset", effect: "With Sloth Owned, 1 ally with most HP deals +30% damage to enemies below 0 SP." }
    ],
    teamSynergy: "Pairs well with Sinners reducing enemy SP or having high HP, enhancing damage output in tactical setups."
  }

];