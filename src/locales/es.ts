const es = {
  languageCode: 'es',
  languageName: 'Español',
  languageSwitchLabel: 'Idioma',
  nav: {
    home: 'Inicio',
    downloads: 'Descargas',
    documentation: 'Documentación',
    collaborate: 'Colaborar',
    discord: 'Unirse a Discord'
  },
  footer: {
    description: 'OpenVFD es software open source para simulación de variadores de frecuencia y motores.',
    documentation: 'Documentación',
    collaborate: 'Colaborar'
  },
  home: {
    title: 'OpenVFD | Simulador Open Source de Variadores',
    description: 'OpenVFD simula el comportamiento del variador y del motor con integración OPC UA para control y telemetría.',
    hero: {
      kicker: 'Simulador Open Source de VFD',
      title: 'Simula la dinámica del motor y del variador en un solo entorno.',
      summary:
        'OpenVFD es una plataforma open source para simular tanto el modelo del motor como los parámetros básicos del variador de frecuencia, con soporte OPC UA para variables de control y telemetría.',
      primaryCta: 'Descargar última versión',
      secondaryCta: 'Leer documentación'
    },
    features: {
      kicker: 'Capacidades clave',
      title: 'Diseñado para flujos reales de simulación de VFD y motores',
      description:
        'OpenVFD ayuda a desarrolladores, estudiantes e ingenieros de control a modelar comportamiento, probar lazos de control e intercambiar variables en tiempo real por OPC UA.',
      items: [
        {
          token: 'SIM-01',
          title: 'Control del modelo de motor',
          description:
            'Simula perfiles de carga, inercia y respuesta dinámica para ajustar cómo se comporta el motor virtual ante cambios de operación.'
        },
        {
          token: 'DRV-02',
          title: 'Ajuste de parámetros del VFD',
          description:
            'Ajusta parámetros base del variador como frecuencia de salida, rampa de aceleración y referencias de voltaje en un entorno controlado.'
        },
        {
          token: 'OPC-03',
          title: 'Integración OPC UA',
          description:
            'Expone variables de control por OPC UA y transmite telemetría de la simulación a sistemas SCADA y de automatización.'
        },
        {
          token: 'OSS-04',
          title: 'Flujo open source',
          description:
            'Colabora con la comunidad, propone mejoras y prueba ideas de control industrial con herramientas transparentes.'
        }
      ]
    }
  },
  downloads: {
    title: 'Descargas | OpenVFD',
    description: 'Descarga las releases de OpenVFD desde el feed oficial de GitHub.',
    kicker: 'Builds oficiales',
    heading: 'Descargar releases de OpenVFD',
    summary: 'Las releases se obtienen del repositorio open-vfd-simulator en GitHub durante el build.',
    viewOnGithub: 'Ver en GitHub',
    emptyTitle: 'No hay releases disponibles en este momento.',
    emptyDescription:
      'GitHub no devolvió releases durante el build. Revisa la página de releases del repositorio para obtener los artefactos más recientes.',
    noReleaseNotes: 'No hay notas de release disponibles para esta versión.',
    noAssets: 'No se adjuntaron archivos descargables a esta release.'
  },
  collaborate: {
    title: 'Colaborar | OpenVFD',
    description: 'Contribuye a OpenVFD por GitHub, Discord y GitHub Sponsors.',
    kicker: 'Participa',
    heading: 'Construye OpenVFD junto a la comunidad',
    summary:
      'OpenVFD crece con tu retroalimentación, escenarios de prueba y contribuciones de ingenieros de control y desarrolladores.',
    cards: [
      {
        title: 'Contribuir en GitHub',
        description:
          'Abre issues, propone funcionalidades y envía pull requests para mejorar la calidad de la simulación y el soporte de protocolos.',
        href: 'https://github.com/Cecax27/open-vfd-simulator',
        label: 'Abrir repositorio'
      },
      {
        title: 'Unirse a la comunidad',
        description:
          'Comparte flujos con PLC, integraciones y preguntas de implementación en el Discord de OpenVFD.',
        href: 'https://discord.gg/RScK4jEC7',
        label: 'Unirse a Discord'
      },
      {
        title: 'GitHub Sponsors',
        description:
          'Apoya el desarrollo a través de GitHub Sponsors. El perfil está reservado y se activará pronto.',
        href: 'https://github.com/sponsors/Cecax27',
        label: 'Ver página de Sponsors',
        badge: 'Próximamente'
      }
    ]
  },
  docs: {
    title: 'Documentación | OpenVFD',
    description: 'Guías y referencia de OpenVFD',
    pageTitle: 'Documentación',
    pageIntro:
      'Explora la documentación de OpenVFD por categorías. Cada guía se enfoca en un tema para mantener clara la configuración y solución de problemas.',
    allArticles: 'Todos los artículos de documentación',
    sidebarTitle: 'Documentación',
    categories: {
      'getting-started': 'Primeros pasos',
      simulation: 'Simulación',
      'opc-ua': 'OPC UA',
      reference: 'Referencia'
    },
    categoryDescriptions: {
      'getting-started': 'Alcance del proyecto, instalación y configuración inicial.',
      simulation: 'Modelo de motor, comportamiento de carga y configuración de parámetros del VFD.',
      'opc-ua': 'Estrategia de variables de control y nodos de telemetría.',
      reference: 'Listado de parámetros y notas de implementación.'
    },
    articleTranslations: {
      'getting-started/01-introduction': {
        title: 'Introducción a OpenVFD',
        description: 'Comprende qué simula OpenVFD y cómo encaja en flujos de sistemas de control.'
      },
      'getting-started/02-installation': {
        title: 'Instalación',
        description: 'Prepara tu entorno e instala OpenVFD desde las releases publicadas.'
      },
      'getting-started/03-quick-start': {
        title: 'Inicio rápido',
        description: 'Ejecuta tu primera simulación con parámetros por defecto de motor y VFD.'
      },
      'simulation/01-motor-model': {
        title: 'Modelo de motor e inercia',
        description: 'Configura carga e inercia para representar un comportamiento de motor realista.'
      },
      'simulation/02-vfd-parameters': {
        title: 'Parámetros del VFD',
        description: 'Ajusta valores clave del variador y entiende su impacto en la simulación.'
      },
      'simulation/03-running-simulation': {
        title: 'Ejecución y monitoreo de una simulación',
        description: 'Inicia, detén y evalúa corridas de simulación con criterios repetibles.'
      },
      'opc-ua/01-overview': {
        title: 'Resumen de integración OPC UA',
        description: 'Aprende cómo OpenVFD expone control y telemetría a través de OPC UA.'
      },
      'opc-ua/02-control-variables': {
        title: 'Variables de control OPC UA',
        description: 'Comprende qué variables están destinadas a escrituras de control.'
      },
      'opc-ua/03-telemetry': {
        title: 'Telemetría OPC UA',
        description: 'Consume nodos de telemetría de simulación para monitoreo y análisis.'
      },
      'reference/01-parameter-list': {
        title: 'Referencia de parámetros',
        description: 'Resumen de parámetros de simulación y comunicación usados en OpenVFD.'
      }
    }
  },
  discordBanner: {
    kicker: '¿Necesitas soporte o quieres compartir tu configuración?',
    title: 'Únete a la comunidad de OpenVFD en Discord.',
    button: 'Conectar en Discord'
  }
} as const;

export default es;
