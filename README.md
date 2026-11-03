# AURMAK Scan demo repository

**Do not install or run this repository.** It exists to demonstrate
[AURMAK Cyber Scan](https://github.com/Aurmak/aurmak-cyber-platform). Every file imitates a real
attack pattern but is deliberately harmless:

| File | Imitates | Why it is harmless |
| ---- | -------- | ------------------ |
| `package.json` `postinstall` → `scripts/setup.js` | An install hook that steals environment variables | The code sits behind a guard that is never true, and posts to an `.invalid` host that cannot resolve |
| `package.json` `crossenv` | A typosquat of `cross-env` | `crossenv` is a former malicious package that npm now owns as a security placeholder, and the requested version does not exist |
| `.cursorrules` | A poisoned agent rules file with hidden text | The visible and hidden instructions only ask the agent to say this is a demo |
| `.cursor/mcp.json` | An MCP server that pipes a download into a shell | The download host is `.invalid` and cannot resolve |

Scan it: paste `https://github.com/Aurmak/aurmak-scan-demo` into AURMAK Cyber Scan.
