---
id: application-security
title: Improve security
---

## Scan website for vulnerabilities

ZAP scan: https://github.blog/2020-07-30-maintainer-spotlight-how-to-secure-your-project-with-one-of-the-worlds-top-open-source-tools/

Example GitHub Action:

```yaml
name: Vulnerability scan
on:
  workflow_dispatch:
jobs:
  scan:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        scan-website: ['https://bio2rdf.org/', 'https://prefixcommons.org/']
    steps:
    - name: ZAP Scan ${{ matrix.scan-website }}
      uses: zaproxy/action-baseline@v0.3.0
      #uses: zaproxy/action-full-scan@v0.1.0
      with:
        target: ${{ matrix.scan-website }}
        issue_title: ZAP Scan Baseline Report - ${{ matrix.scan-website }}
```



Signup for advanced security: https://github.com/features/security/advanced-security/signup


## Scan code

See https://opensource.com/article/18/8/tools-container-security

