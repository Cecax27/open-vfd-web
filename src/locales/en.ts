const en = {
  languageCode: 'en',
  languageName: 'English',
  languageSwitchLabel: 'Language',
  nav: {
    home: 'Home',
    downloads: 'Downloads',
    documentation: 'Documentation',
    collaborate: 'Collaborate',
    discord: 'Join Discord'
  },
  footer: {
    description: 'OpenVFD is open source software for VFD and motor simulation.',
    documentation: 'Documentation',
    collaborate: 'Collaborate'
  },
  home: {
    title: 'OpenVFD | Open Source VFD Simulator',
    description: 'OpenVFD simulates VFD and motor behavior with OPC UA integration for controls and telemetry.',
    hero: {
      kicker: 'Open Source VFD Simulator',
      title: 'Simulate motor dynamics and VFD behavior in one focused workspace.',
      summary:
        'OpenVFD is an open source software platform to simulate both the motor model and variable frequency drive basics, with OPC UA support for control variables and simulation telemetry.',
      primaryCta: 'Get Latest Build',
      secondaryCta: 'Read Documentation'
    },
    features: {
      kicker: 'Core Capabilities',
      title: 'Built for practical VFD and motor simulation workflows',
      description:
        'OpenVFD helps developers, students, and control engineers model behavior, test control loops, and exchange real-time variables over OPC UA.',
      items: [
        {
          token: 'SIM-01',
          title: 'Motor Model Control',
          description:
            'Simulate load profile, inertia, and response behavior to tune how the virtual motor behaves under changing conditions.'
        },
        {
          token: 'DRV-02',
          title: 'VFD Parameter Tuning',
          description:
            'Adjust base VFD parameters such as output frequency, acceleration ramp, and voltage references in a controlled environment.'
        },
        {
          token: 'OPC-03',
          title: 'OPC UA Integration',
          description:
            'Expose control variables through OPC UA and stream simulation telemetry to external SCADA and automation systems.'
        },
        {
          token: 'OSS-04',
          title: 'Open Source Workflow',
          description:
            'Collaborate with the community, propose improvements, and test industrial control ideas with transparent tooling.'
        }
      ]
    }
  },
  downloads: {
    title: 'Downloads | OpenVFD',
    description: 'Download OpenVFD releases from the official GitHub release feed.',
    kicker: 'Official Builds',
    heading: 'Download OpenVFD releases',
    summary: 'Releases are pulled from the open-vfd-simulator GitHub repository at build time.',
    viewOnGithub: 'View on GitHub',
    emptyTitle: 'No releases available right now.',
    emptyDescription:
      'GitHub did not return releases during build. Check the repository releases page for the latest artifacts.',
    showReleaseNotes: 'Show release notes',
    noReleaseNotes: 'No release notes available for this version yet.',
    noAssets: 'No downloadable assets were attached to this release.'
  },
  collaborate: {
    title: 'Collaborate | OpenVFD',
    description: 'Contribute to OpenVFD through GitHub, Discord, and GitHub Sponsors.',
    kicker: 'Get Involved',
    heading: 'Build OpenVFD with the community',
    summary:
      'OpenVFD grows with your feedback, test scenarios, and contributions from control engineers and developers.',
    cards: [
      {
        title: 'Contribute on GitHub',
        description:
          'Open issues, propose features, and submit pull requests to improve simulation quality and protocol support.',
        href: 'https://github.com/Cecax27/open-vfd-simulator',
        label: 'Open Repository'
      },
      {
        title: 'Join the Community',
        description:
          'Discuss PLC workflows, share integrations, and ask implementation questions in the OpenVFD Discord.',
        href: 'https://discord.gg/RScK4jEC7',
        label: 'Join Discord'
      },
      {
        title: 'GitHub Sponsors',
        description:
          'Support development through GitHub Sponsors. The profile is reserved and will be activated soon.',
        href: 'https://github.com/sponsors/Cecax27',
        label: 'View Sponsors Page',
        badge: 'Coming Soon'
      }
    ]
  },
  docs: {
    title: 'Documentation | OpenVFD',
    description: 'OpenVFD guides and references',
    pageTitle: 'Documentation',
    pageIntro:
      'Browse the OpenVFD documentation by category. Each guide focuses on one topic to keep setup and troubleshooting clear.',
    allArticles: 'All Documentation Articles',
    sidebarTitle: 'Documentation',
    categories: {
      'getting-started': 'Getting Started',
      simulation: 'Simulation',
      'opc-ua': 'OPC UA',
      reference: 'Reference'
    },
    categoryDescriptions: {
      'getting-started': 'Project scope, installation instructions, and quick setup steps.',
      simulation: 'Motor model, load behavior, and VFD parameter configuration.',
      'opc-ua': 'Control variables and telemetry node strategy.',
      reference: 'Parameter list and implementation notes.'
    },
    articleTranslations: {
      'getting-started/01-introduction': {
        title: 'Introduction to OpenVFD',
        description: 'Understand what OpenVFD simulates and where it fits in control system workflows.'
      },
      'getting-started/02-installation': {
        title: 'Installation',
        description: 'Prepare your environment and install OpenVFD from published releases.'
      },
      'getting-started/03-quick-start': {
        title: 'Quick Start',
        description: 'Run your first simulation with default motor and VFD settings.'
      },
      'simulation/01-motor-model': {
        title: 'Motor Model and Inertia',
        description: 'Configure load and inertia values to represent realistic motor behavior.'
      },
      'simulation/02-vfd-parameters': {
        title: 'VFD Parameters',
        description: 'Adjust core VFD values and understand their impact on simulation outputs.'
      },
      'simulation/03-running-simulation': {
        title: 'Running and Monitoring a Simulation',
        description: 'Start, stop, and evaluate simulation runs with repeatable checks.'
      },
      'opc-ua/01-overview': {
        title: 'OPC UA Integration Overview',
        description: 'Learn how OpenVFD exposes control and telemetry through OPC UA.'
      },
      'opc-ua/02-control-variables': {
        title: 'OPC UA Control Variables',
        description: 'Understand which variables are intended for control writes.'
      },
      'opc-ua/03-telemetry': {
        title: 'OPC UA Telemetry',
        description: 'Consume simulation telemetry nodes for monitoring and analysis.'
      },
      'reference/01-parameter-list': {
        title: 'Parameter Reference',
        description: 'Summary of simulation and communication parameters used in OpenVFD.'
      }
    }
  },
  discordBanner: {
    kicker: 'Need support or want to share your setup?',
    title: 'Join the OpenVFD Discord community.',
    button: 'Connect on Discord'
  }
} as const;

export default en;
