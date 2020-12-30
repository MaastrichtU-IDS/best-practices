---
title: Improving code security
author: Vincent Emonet
authorURL: "https://github.com/vemonet/"
# authorFBID: 100002976521003
---

:::warning

Work in progress :building_construction:

:::

Securing softwares is a complex task, especially for research softwares.

But some actions can be easily taken to improve your code security.

1. Example of GitHub dependabot warning triggered when doing `git push`

```
Counting objects: 6, done.
Delta compression using up to 8 threads.
Compressing objects: 100% (6/6), done.
Writing objects: 100% (6/6), 1.01 KiB | 1.01 MiB/s, done.
Total 6 (delta 4), reused 0 (delta 0)
remote: Resolving deltas: 100% (4/4), completed with 4 local objects.
remote: 
remote: GitHub found 2 vulnerabilities on MaastrichtU-IDS/dsri-documentation's default branch (1 moderate, 1 low). To find out more, visit:
remote:      https://github.com/MaastrichtU-IDS/dsri-documentation/security/dependabot
remote: 
To github.com:MaastrichtU-IDS/dsri-documentation.git
```

Note that you can also enable dependabot to automatically update problematic dependencies, e.g. https://github.com/MaastrichtU-IDS/dsri-documentation/pulls

2. CodeQL analysis via GitHub Actions.
3. SonarCloud is quite nice for Test coverage + relevant reports on dangerous code ("code smells")
4. Too many issues with some tools like Anchore.
5. High quality Docker image analysis with Snyke, but require to pay.