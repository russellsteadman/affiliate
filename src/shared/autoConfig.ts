const AUTO_CONFIG_SYNTAX_REGEX = /WHERE (.+?) SET (.+?)\s*(?:AND|$)/g;

/* Setup automatic configuration */
const AutoConfig = () => {
  const scriptNode = document.getElementById('aff-js');

  if (typeof scriptNode === 'object' && scriptNode) {
    const nodeData = scriptNode?.dataset?.autoAffiliate;

    if (typeof nodeData === 'string') {
      const tags: { hosts: string[]; query: Record<string, string> }[] = [];

      const expressions = nodeData.match(AUTO_CONFIG_SYNTAX_REGEX);

      if (!expressions) return;

      Object.values(expressions).forEach((expression) => {
        const components = AUTO_CONFIG_SYNTAX_REGEX.exec(expression);

        if (!components || components.length !== 3) return;

        const hosts = components[1];
        const queries = components[2];

        tags.push({
          hosts: hosts.split(',').map((host) => host.trim()),
          query: queries.split(',').reduce((a, b) => {
            const [key, value] = b.split('=');
            if (key && value) a[key.trim()] = value.trim();
            return a;
          }, {} as Record<string, string>),
        });
      });

      return { tags };
    }
  }
};

export default AutoConfig;
