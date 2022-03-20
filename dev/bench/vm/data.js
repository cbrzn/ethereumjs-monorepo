window.BENCHMARK_DATA = {
  "lastUpdate": 1647817815405,
  "repoUrl": "https://github.com/cbrzn/ethereumjs-monorepo",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "jochembrouwer96@gmail.com",
            "name": "Jochem Brouwer",
            "username": "jochem-brouwer"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "36d4a06a9590644b2cf20262b74bd53570cf20cd",
          "message": "Ethash: add CPU miner (#1475)\n\n* ethash: add cpu miner\r\n\r\n* ethash: add miner tests, expand miner features\r\n\r\n* ethash: address type check using instanceof\r\nethash: copy common when mining\r\nethash: add common copy test\r\n\r\n* ethash: add common as devDependency\r\n\r\n* ethash: moved @ethereumjs/block library to dependencies\r\n\r\n* ethash -> miner: do not expose class members as public\r\n\r\nCo-authored-by: Holger Drewes <Holger.Drewes@gmail.com>",
          "timestamp": "2021-09-23T14:18:17+02:00",
          "tree_id": "ffb54b15304f5ebfc9a8706843b02dc0f854d4f8",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/36d4a06a9590644b2cf20262b74bd53570cf20cd"
        },
        "date": 1632399804351,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 16926,
            "range": "±6.38%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Block 9422906",
            "value": 18083,
            "range": "±3.01%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422907",
            "value": 19876,
            "range": "±2.99%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "Block 9422908",
            "value": 16143,
            "range": "±11.34%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "Block 9422909",
            "value": 18506,
            "range": "±2.97%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Block 9422910",
            "value": 19308,
            "range": "±2.98%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422911",
            "value": 18665,
            "range": "±2.96%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Block 9422912",
            "value": 14154,
            "range": "±14.16%",
            "unit": "ops/sec",
            "extra": "58 samples"
          },
          {
            "name": "Block 9422913",
            "value": 12457,
            "range": "±13.65%",
            "unit": "ops/sec",
            "extra": "61 samples"
          },
          {
            "name": "Block 9422914",
            "value": 17260,
            "range": "±3.90%",
            "unit": "ops/sec",
            "extra": "73 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Holger.Drewes@gmail.com",
            "name": "Holger Drewes",
            "username": "holgerd77"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cf95e04c6a2769865999a4262705a7adf6db416c",
          "message": "util, ethash, common, tx, block, blockchain, devp2p, vm: Client preparing Releases (#1491)\n\n* ethash -> miner: made solution property public\r\n\r\n* util: bumped version to v7.1.1, added CHANGELOG entry, updated upstream dependency versions\r\n\r\n* monorepo: updated package-lock.json\r\n\r\n* util -> release: rebuild documentation\r\n\r\n* common -> release: bumped version to v2.5.0, added CHANGELOG entry, updated README, updated upstream dependency versions\r\n\r\n* monorepo: updated package-lock.json, updated typedoc dev dependency from 0.21.5 to 0.22.4\r\n\r\n* common -> release: rebuild documentation\r\n\r\n* tx -> release: bumped version to v3.3.1, added CHANGELOG entry, updated upstream dependency versions\r\n\r\n* tx -> release: rebuild documentation\r\n\r\n* block -> release: bumped version to v3.5.0, added CHANGELOG entry, updated README, updated upstream dependency versions\r\n\r\n* ethash -> release: bumped version to v1.1.0, added CHANGELOG entry, updated README, updated upstream dependency versions\r\n\r\n* ethash -> release: build documentation, replaced manual API docs with auto-generated documentation\r\n\r\n* monorepo: updated package-lock.json\r\n\r\n* blockchain -> release: bumped version to v5.4.1, added CHANGELOG entry, updated upstream dependency versions\r\n\r\n* blockchain -> release: rebuild documentation\r\n\r\n* devp2p -> release: bumped version to v4.2.0, added CHANGELOG entry, updated upstream dependency versions\r\n\r\n* vm -> release: bumped version to v5.5.3, added CHANGELOG entry, updated upstream dependency versions\r\n\r\n* monorepo: updated package-lock.json\r\n\r\n* Apply suggestions from code review\r\n\r\n* add tiny fixes from #905\r\n\r\n* Update packages/util/CHANGELOG.md\r\n\r\nCo-authored-by: acolytec3 <17355484+acolytec3@users.noreply.github.com>\r\n\r\n* from tiny fixes issue: add calcNextBaseFee() example to block README\r\n\r\n* fix typos (preceeding -> preceding, analogue -> analog for american english variant)\r\n\r\n* from tiny fixes: remove old reference to node-devp2p, update latest implementations to eth/66 and les/4\r\n\r\nCo-authored-by: Ryan Ghods <ryan@ryanio.com>\r\nCo-authored-by: acolytec3 <17355484+acolytec3@users.noreply.github.com>",
          "timestamp": "2021-09-27T11:50:17+02:00",
          "tree_id": "c5a6289659d4503985bb7c6bd86d547e8add1543",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/cf95e04c6a2769865999a4262705a7adf6db416c"
        },
        "date": 1632736595750,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 15953,
            "range": "±3.69%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422906",
            "value": 15285,
            "range": "±6.37%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422907",
            "value": 16018,
            "range": "±3.29%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Block 9422908",
            "value": 15540,
            "range": "±3.91%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "Block 9422909",
            "value": 11526,
            "range": "±14.77%",
            "unit": "ops/sec",
            "extra": "59 samples"
          },
          {
            "name": "Block 9422910",
            "value": 14667,
            "range": "±4.01%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "Block 9422911",
            "value": 14917,
            "range": "±4.05%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422912",
            "value": 15249,
            "range": "±4.53%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "Block 9422913",
            "value": 14411,
            "range": "±6.45%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "Block 9422914",
            "value": 9146,
            "range": "±18.25%",
            "unit": "ops/sec",
            "extra": "46 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "17355484+acolytec3@users.noreply.github.com",
            "name": "acolytec3",
            "username": "acolytec3"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5b86cc169686c30e052bc0b77442aacd91a96b2f",
          "message": "client: add dev param to start devnet with miner (#1492)\n\n* client: add dev param to start ephemeral devnet with miner\r\nCo-authored-by: Ryan Ghods <ryan@ryanio.com>",
          "timestamp": "2021-09-27T21:45:39-04:00",
          "tree_id": "f31a11439c1266bef287b6bfe7208b1a5f08de7e",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/5b86cc169686c30e052bc0b77442aacd91a96b2f"
        },
        "date": 1632793861558,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 24260,
            "range": "±4.97%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "Block 9422906",
            "value": 24932,
            "range": "±2.14%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Block 9422907",
            "value": 19484,
            "range": "±11.95%",
            "unit": "ops/sec",
            "extra": "62 samples"
          },
          {
            "name": "Block 9422908",
            "value": 21896,
            "range": "±4.52%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "Block 9422909",
            "value": 23130,
            "range": "±2.49%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "Block 9422910",
            "value": 21773,
            "range": "±4.18%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "Block 9422911",
            "value": 11263,
            "range": "±13.95%",
            "unit": "ops/sec",
            "extra": "36 samples"
          },
          {
            "name": "Block 9422912",
            "value": 18870,
            "range": "±9.84%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "Block 9422913",
            "value": 19076,
            "range": "±8.40%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "Block 9422914",
            "value": 8668,
            "range": "±15.07%",
            "unit": "ops/sec",
            "extra": "38 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "17355484+acolytec3@users.noreply.github.com",
            "name": "acolytec3",
            "username": "acolytec3"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "02d93307386096a2be278df486e5636adfe2cb7a",
          "message": "client: readme updates for new dev param (#1496)",
          "timestamp": "2021-09-28T08:21:42-07:00",
          "tree_id": "7c75d25e53ae367dd601d2dbfbd5713e0c1018f1",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/02d93307386096a2be278df486e5636adfe2cb7a"
        },
        "date": 1632847183062,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 25269,
            "range": "±4.70%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Block 9422906",
            "value": 26348,
            "range": "±2.13%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "Block 9422907",
            "value": 20629,
            "range": "±11.82%",
            "unit": "ops/sec",
            "extra": "64 samples"
          },
          {
            "name": "Block 9422908",
            "value": 24545,
            "range": "±2.11%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Block 9422909",
            "value": 24591,
            "range": "±2.01%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422910",
            "value": 21839,
            "range": "±7.97%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "Block 9422911",
            "value": 11219,
            "range": "±23.81%",
            "unit": "ops/sec",
            "extra": "52 samples"
          },
          {
            "name": "Block 9422912",
            "value": 22707,
            "range": "±2.96%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "Block 9422913",
            "value": 13486,
            "range": "±13.35%",
            "unit": "ops/sec",
            "extra": "42 samples"
          },
          {
            "name": "Block 9422914",
            "value": 17001,
            "range": "±20.66%",
            "unit": "ops/sec",
            "extra": "60 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Holger.Drewes@gmail.com",
            "name": "Holger Drewes",
            "username": "holgerd77"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b0477d64c259b354ff57bab7e77be43081216fea",
          "message": "Block, Blockchain: bugfix releases (client preparation) fixing London HF at block 0 or 1 handling (#1495)",
          "timestamp": "2021-09-28T10:36:54-07:00",
          "tree_id": "a2dbe5dfd627bc2d25934d4619a3e747fc0a6969",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/b0477d64c259b354ff57bab7e77be43081216fea"
        },
        "date": 1632850981925,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 15003,
            "range": "±4.44%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "Block 9422906",
            "value": 15201,
            "range": "±7.23%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422907",
            "value": 14671,
            "range": "±3.69%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "Block 9422908",
            "value": 14712,
            "range": "±3.90%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422909",
            "value": 11717,
            "range": "±11.71%",
            "unit": "ops/sec",
            "extra": "58 samples"
          },
          {
            "name": "Block 9422910",
            "value": 14884,
            "range": "±3.74%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Block 9422911",
            "value": 14278,
            "range": "±4.48%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "Block 9422912",
            "value": 14490,
            "range": "±4.25%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "Block 9422913",
            "value": 15330,
            "range": "±4.17%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "Block 9422914",
            "value": 10706,
            "range": "±17.76%",
            "unit": "ops/sec",
            "extra": "54 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Holger.Drewes@gmail.com",
            "name": "Holger Drewes",
            "username": "holgerd77"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "346dde294bb23d6acd6b4df3e6d7a26fb46555cb",
          "message": "Client: first stable release v0.1.0 🎉 (#1499)\n\n* client -> release: bumped version to v0.1.0, added CHANGELOG entry\r\n\r\n* client -> release: updated README\r\n\r\n* Apply suggestions from code review\r\n\r\nCo-authored-by: Gabriel Rocheleau <contact@rockwaterweb.com>\r\n\r\n* delete removed readme section\r\n\r\n* run prettier\r\n\r\nCo-authored-by: Ryan Ghods <ryan@ryanio.com>\r\nCo-authored-by: Gabriel Rocheleau <contact@rockwaterweb.com>",
          "timestamp": "2021-09-29T23:19:17+02:00",
          "tree_id": "e9e124e7f20afde58790aa5dd90a664f88fdb1cf",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/346dde294bb23d6acd6b4df3e6d7a26fb46555cb"
        },
        "date": 1632950705403,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 14872,
            "range": "±3.25%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422906",
            "value": 14367,
            "range": "±6.00%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422907",
            "value": 15351,
            "range": "±3.32%",
            "unit": "ops/sec",
            "extra": "81 samples"
          },
          {
            "name": "Block 9422908",
            "value": 15309,
            "range": "±4.02%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422909",
            "value": 11020,
            "range": "±15.78%",
            "unit": "ops/sec",
            "extra": "58 samples"
          },
          {
            "name": "Block 9422910",
            "value": 14120,
            "range": "±3.95%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422911",
            "value": 14793,
            "range": "±3.90%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "Block 9422912",
            "value": 14661,
            "range": "±3.79%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Block 9422913",
            "value": 14151,
            "range": "±4.45%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Block 9422914",
            "value": 11069,
            "range": "±16.02%",
            "unit": "ops/sec",
            "extra": "57 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jochembrouwer96@gmail.com",
            "name": "Jochem Brouwer",
            "username": "jochem-brouwer"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "531e4b3a1843833b3015ab185fc610f4f2da5d67",
          "message": "Tx/Util: ensure only integers are allowed as input (#1500)\n\n* util: verify intToBuffer/intToHex inputs are integers\r\ntx: add checks to verify decimal values cannot be used\r\n\r\n* util/tx: check max safe integer, add string tests\r\n\r\n* util: simplify intToHex\r\n\r\n* tx: add test cases\r\n\r\n* tx/util: add test cases\r\n\r\n* tx: 1 more test failing input test case\r\n\r\n* tx: remove console.log\r\n\r\n* Update packages/util/test/bytes.spec.ts\r\n\r\nCo-authored-by: Gabriel Rocheleau <contact@rockwaterweb.com>\r\n\r\n* Update packages/util/test/bytes.spec.ts\r\n\r\nCo-authored-by: Gabriel Rocheleau <contact@rockwaterweb.com>\r\n\r\nCo-authored-by: Gabriel Rocheleau <contact@rockwaterweb.com>\r\nCo-authored-by: Holger Drewes <Holger.Drewes@gmail.com>",
          "timestamp": "2021-09-30T00:06:39+02:00",
          "tree_id": "e2ce055bf1b6a2c53a38ada77f0198fed1dcea3d",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/531e4b3a1843833b3015ab185fc610f4f2da5d67"
        },
        "date": 1632953512322,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 24136,
            "range": "±6.99%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "Block 9422906",
            "value": 24584,
            "range": "±2.24%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422907",
            "value": 22587,
            "range": "±6.18%",
            "unit": "ops/sec",
            "extra": "65 samples"
          },
          {
            "name": "Block 9422908",
            "value": 15956,
            "range": "±18.82%",
            "unit": "ops/sec",
            "extra": "61 samples"
          },
          {
            "name": "Block 9422909",
            "value": 22502,
            "range": "±2.50%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "Block 9422910",
            "value": 22040,
            "range": "±3.07%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "Block 9422911",
            "value": 12798,
            "range": "±17.62%",
            "unit": "ops/sec",
            "extra": "41 samples"
          },
          {
            "name": "Block 9422912",
            "value": 11380,
            "range": "±37.05%",
            "unit": "ops/sec",
            "extra": "46 samples"
          },
          {
            "name": "Block 9422913",
            "value": 20377,
            "range": "±3.32%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "Block 9422914",
            "value": 11305,
            "range": "±11.79%",
            "unit": "ops/sec",
            "extra": "37 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Holger.Drewes@gmail.com",
            "name": "Holger Drewes",
            "username": "holgerd77"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6e41fb32a4916cff53ec940d94e3c238f3c20d5f",
          "message": "Util v7.1.2 and Tx v3.3.2 Releases (#1501)\n\n* util -> release: bumped version to v7.1.2, added CHANGELOG entry, updated upstream dependency versions\r\n\r\n* util -> release: rebuild documentation\r\n\r\n* tx -> release: bumped version to v3.3.2, added CHANGELOG entry, updated upstream dependency versions\r\n\r\n* monorepo: updated package-lock.json\r\n\r\n* util -> release: updated exclude directive in typedoc.js, rebuild documentation",
          "timestamp": "2021-09-30T01:26:36+02:00",
          "tree_id": "e235ea6f73852f5fc35377ac443788383f569998",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/6e41fb32a4916cff53ec940d94e3c238f3c20d5f"
        },
        "date": 1632958360482,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 20342,
            "range": "±6.13%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "Block 9422906",
            "value": 20887,
            "range": "±2.72%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "Block 9422907",
            "value": 21199,
            "range": "±2.99%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Block 9422908",
            "value": 13610,
            "range": "±15.58%",
            "unit": "ops/sec",
            "extra": "50 samples"
          },
          {
            "name": "Block 9422909",
            "value": 19000,
            "range": "±3.59%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "Block 9422910",
            "value": 19751,
            "range": "±3.59%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "Block 9422911",
            "value": 18741,
            "range": "±3.89%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "Block 9422912",
            "value": 11158,
            "range": "±18.47%",
            "unit": "ops/sec",
            "extra": "41 samples"
          },
          {
            "name": "Block 9422913",
            "value": 11123,
            "range": "±24.34%",
            "unit": "ops/sec",
            "extra": "49 samples"
          },
          {
            "name": "Block 9422914",
            "value": 17113,
            "range": "±4.97%",
            "unit": "ops/sec",
            "extra": "62 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ryan@ryanio.com",
            "name": "Ryan Ghods",
            "username": "ryanio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e8979852695df7fa7c33858e744ce185f985aade",
          "message": "client: merge related work (#1493)",
          "timestamp": "2021-09-30T06:49:49-07:00",
          "tree_id": "af3b95b56bdbc8919110dbf8ab8d94e59a858ac8",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/e8979852695df7fa7c33858e744ce185f985aade"
        },
        "date": 1633010116578,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 18442,
            "range": "±6.12%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "Block 9422906",
            "value": 18862,
            "range": "±2.52%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422907",
            "value": 19186,
            "range": "±2.88%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "Block 9422908",
            "value": 14447,
            "range": "±11.29%",
            "unit": "ops/sec",
            "extra": "61 samples"
          },
          {
            "name": "Block 9422909",
            "value": 17649,
            "range": "±3.39%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422910",
            "value": 18852,
            "range": "±2.95%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422911",
            "value": 18661,
            "range": "±3.12%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422912",
            "value": 15430,
            "range": "±12.05%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "Block 9422913",
            "value": 10690,
            "range": "±16.55%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "Block 9422914",
            "value": 16931,
            "range": "±4.06%",
            "unit": "ops/sec",
            "extra": "74 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Holger.Drewes@gmail.com",
            "name": "Holger Drewes",
            "username": "holgerd77"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "05f6f7a904302129ea1c89d22efcb043d92881e1",
          "message": "client: add RPC help (--helprpc) (#1505)",
          "timestamp": "2021-10-01T22:56:22+02:00",
          "tree_id": "64fa970c0f2ce20a0759e3672dbd70b7adc0a14d",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/05f6f7a904302129ea1c89d22efcb043d92881e1"
        },
        "date": 1633122083231,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 24019,
            "range": "±6.44%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "Block 9422906",
            "value": 25727,
            "range": "±1.93%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422907",
            "value": 21582,
            "range": "±9.39%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "Block 9422908",
            "value": 19509,
            "range": "±16.66%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "Block 9422909",
            "value": 24172,
            "range": "±2.37%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422910",
            "value": 23212,
            "range": "±4.11%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "Block 9422911",
            "value": 12100,
            "range": "±15.10%",
            "unit": "ops/sec",
            "extra": "38 samples"
          },
          {
            "name": "Block 9422912",
            "value": 21050,
            "range": "±3.20%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "Block 9422913",
            "value": 16251,
            "range": "±12.25%",
            "unit": "ops/sec",
            "extra": "52 samples"
          },
          {
            "name": "Block 9422914",
            "value": 12898,
            "range": "±21.54%",
            "unit": "ops/sec",
            "extra": "53 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ryan@ryanio.com",
            "name": "Ryan Ghods",
            "username": "ryanio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "501be8da11b07d138bb4497f8a18bdf0fa2d11d7",
          "message": "client: merge work continued (#1509)\n\n* improve logs\r\n\r\n* simplify scripts, upgrade webpack dep to latest\r\n\r\n* Engine API: make preparePayload return an object (https://github.com/ethereum/execution-apis/commit/bd4389dea0f1c4bbf9d08e7bfc13d8bbded51224)\r\n\r\n* parseGethParams: add baseFeePerGas and terminalTotalDifficulty for taunas testnet\r\ncheckDAOExtraData: skip if DAOActivationBlock is zero\r\n\r\n* rename block.header.bloom to block.header.logsBloom and add backwards compatibility\r\n\r\n* remove unnecessary toNumber() and toString() within string literals\r\n\r\n* improve inTurn log language\r\n\r\n* replace JsonHeader.baseFee with baseFeePerGas (geth updated to this so we should also for consistency)\r\n\r\n* fixes",
          "timestamp": "2021-10-02T14:11:17+02:00",
          "tree_id": "1eaac9d91f2970faf3505d56aa6e5cfb17c307af",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/501be8da11b07d138bb4497f8a18bdf0fa2d11d7"
        },
        "date": 1633177053037,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 16470,
            "range": "±3.05%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422906",
            "value": 15721,
            "range": "±4.68%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422907",
            "value": 16691,
            "range": "±2.78%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "Block 9422908",
            "value": 15216,
            "range": "±12.78%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "Block 9422909",
            "value": 11777,
            "range": "±13.73%",
            "unit": "ops/sec",
            "extra": "62 samples"
          },
          {
            "name": "Block 9422910",
            "value": 15576,
            "range": "±3.45%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Block 9422911",
            "value": 15939,
            "range": "±3.28%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "Block 9422912",
            "value": 15317,
            "range": "±3.87%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422913",
            "value": 15422,
            "range": "±4.94%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Block 9422914",
            "value": 7440,
            "range": "±23.43%",
            "unit": "ops/sec",
            "extra": "36 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pilll.PL22@gmail.com",
            "name": "v 1 r t l",
            "username": "talentlessguy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3fefc5f9a43baebc2f77388a533fc06dd534adf8",
          "message": "feat(vm): use promisify from node.js (#1514)\n\n* feat: use promisify from node.js\r\n* chore: remove util.promisify from dependencies",
          "timestamp": "2021-10-03T17:20:23-07:00",
          "tree_id": "61bbda057bb9c7dd7f3fcd4cdf7528d663599f16",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/3fefc5f9a43baebc2f77388a533fc06dd534adf8"
        },
        "date": 1633308071979,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 13856,
            "range": "±4.28%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "Block 9422906",
            "value": 13434,
            "range": "±4.68%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422907",
            "value": 14072,
            "range": "±3.33%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422908",
            "value": 14057,
            "range": "±3.56%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "Block 9422909",
            "value": 10620,
            "range": "±16.52%",
            "unit": "ops/sec",
            "extra": "62 samples"
          },
          {
            "name": "Block 9422910",
            "value": 13006,
            "range": "±6.06%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422911",
            "value": 13242,
            "range": "±3.91%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422912",
            "value": 13683,
            "range": "±3.82%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "Block 9422913",
            "value": 13738,
            "range": "±4.05%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422914",
            "value": 13411,
            "range": "±4.65%",
            "unit": "ops/sec",
            "extra": "77 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "30843294+Aniket-Engg@users.noreply.github.com",
            "name": "Aniket",
            "username": "Aniket-Engg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6ca7ffdeb880431b39e39df60f27b264553a9ea8",
          "message": "trie: add try-catch for \"Missing node in DB\" in ReadStream (#1515)",
          "timestamp": "2021-10-06T08:00:06-07:00",
          "tree_id": "2f19eea8b1a8ab23e8fc3d04c1d3373500a89c0c",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/6ca7ffdeb880431b39e39df60f27b264553a9ea8"
        },
        "date": 1633534433937,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 24561,
            "range": "±5.95%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "Block 9422906",
            "value": 25563,
            "range": "±2.14%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "Block 9422907",
            "value": 19349,
            "range": "±14.18%",
            "unit": "ops/sec",
            "extra": "61 samples"
          },
          {
            "name": "Block 9422908",
            "value": 23069,
            "range": "±2.52%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "Block 9422909",
            "value": 23958,
            "range": "±2.53%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "Block 9422910",
            "value": 22803,
            "range": "±4.02%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "Block 9422911",
            "value": 10959,
            "range": "±14.36%",
            "unit": "ops/sec",
            "extra": "35 samples"
          },
          {
            "name": "Block 9422912",
            "value": 21109,
            "range": "±3.45%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "Block 9422913",
            "value": 17415,
            "range": "±12.59%",
            "unit": "ops/sec",
            "extra": "54 samples"
          },
          {
            "name": "Block 9422914",
            "value": 10155,
            "range": "±22.64%",
            "unit": "ops/sec",
            "extra": "45 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ryan@ryanio.com",
            "name": "Ryan Ghods",
            "username": "ryanio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a50fb5f97331b54dc596d19e6798dcce6ede0f3f",
          "message": "prep MPT release v4.2.2 (#1518)",
          "timestamp": "2021-10-06T09:19:48-07:00",
          "tree_id": "dc1367d7f8529707cb64fa2849a8673ca26fedf8",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/a50fb5f97331b54dc596d19e6798dcce6ede0f3f"
        },
        "date": 1633539116909,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 15079,
            "range": "±3.24%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "Block 9422906",
            "value": 13859,
            "range": "±7.53%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "Block 9422907",
            "value": 15032,
            "range": "±3.47%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Block 9422908",
            "value": 15002,
            "range": "±3.84%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422909",
            "value": 11196,
            "range": "±13.02%",
            "unit": "ops/sec",
            "extra": "57 samples"
          },
          {
            "name": "Block 9422910",
            "value": 13622,
            "range": "±4.00%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "Block 9422911",
            "value": 14227,
            "range": "±4.03%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Block 9422912",
            "value": 14007,
            "range": "±4.15%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "Block 9422913",
            "value": 13651,
            "range": "±4.25%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "Block 9422914",
            "value": 13323,
            "range": "±6.29%",
            "unit": "ops/sec",
            "extra": "69 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "17355484+acolytec3@users.noreply.github.com",
            "name": "acolytec3",
            "username": "acolytec3"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fb4c15e10d89101ec62a64b75f7ab003d39cda75",
          "message": "vm: fix accountexists bug in pre-SD hardforks (#1516)\n\n* vm: fix accountexists bug in pre-SD hardforks\r\n\r\nCo-authored-by: Jochem Brouwer <jochembrouwer96@gmail.com>",
          "timestamp": "2021-10-06T14:33:16-04:00",
          "tree_id": "fa7be6fedafa98cca960e98446e1cd22f926d59d",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/fb4c15e10d89101ec62a64b75f7ab003d39cda75"
        },
        "date": 1633545577162,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 13661,
            "range": "±4.90%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "Block 9422906",
            "value": 12771,
            "range": "±7.34%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "Block 9422907",
            "value": 14154,
            "range": "±3.71%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422908",
            "value": 13617,
            "range": "±4.60%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "Block 9422909",
            "value": 11188,
            "range": "±14.19%",
            "unit": "ops/sec",
            "extra": "62 samples"
          },
          {
            "name": "Block 9422910",
            "value": 12763,
            "range": "±6.73%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "Block 9422911",
            "value": 13831,
            "range": "±4.07%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "Block 9422912",
            "value": 14395,
            "range": "±3.91%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422913",
            "value": 14092,
            "range": "±4.15%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "Block 9422914",
            "value": 13542,
            "range": "±6.22%",
            "unit": "ops/sec",
            "extra": "68 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "17355484+acolytec3@users.noreply.github.com",
            "name": "acolytec3",
            "username": "acolytec3"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fb4c15e10d89101ec62a64b75f7ab003d39cda75",
          "message": "vm: fix accountexists bug in pre-SD hardforks (#1516)\n\n* vm: fix accountexists bug in pre-SD hardforks\r\n\r\nCo-authored-by: Jochem Brouwer <jochembrouwer96@gmail.com>",
          "timestamp": "2021-10-06T14:33:16-04:00",
          "tree_id": "fa7be6fedafa98cca960e98446e1cd22f926d59d",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/fb4c15e10d89101ec62a64b75f7ab003d39cda75"
        },
        "date": 1633562942123,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 20289,
            "range": "±7.96%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "Block 9422906",
            "value": 21663,
            "range": "±2.91%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Block 9422907",
            "value": 17129,
            "range": "±11.47%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "Block 9422908",
            "value": 20485,
            "range": "±3.11%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "Block 9422909",
            "value": 20169,
            "range": "±3.27%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "Block 9422910",
            "value": 19710,
            "range": "±5.12%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "Block 9422911",
            "value": 14084,
            "range": "±13.14%",
            "unit": "ops/sec",
            "extra": "54 samples"
          },
          {
            "name": "Block 9422912",
            "value": 12791,
            "range": "±28.52%",
            "unit": "ops/sec",
            "extra": "59 samples"
          },
          {
            "name": "Block 9422913",
            "value": 18267,
            "range": "±4.31%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "Block 9422914",
            "value": 14212,
            "range": "±14.53%",
            "unit": "ops/sec",
            "extra": "54 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ryan@ryanio.com",
            "name": "Ryan Ghods",
            "username": "ryanio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ab31013d154cc7be157daf21a3b534413dec2547",
          "message": "client: non-merge related changes (#1519)",
          "timestamp": "2021-10-07T08:50:33-07:00",
          "tree_id": "41e8b09b864202b8f77829e9c44dd6589e12ca96",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/ab31013d154cc7be157daf21a3b534413dec2547"
        },
        "date": 1633622277886,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 20253,
            "range": "±6.68%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "Block 9422906",
            "value": 21170,
            "range": "±2.95%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Block 9422907",
            "value": 20777,
            "range": "±3.56%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422908",
            "value": 14830,
            "range": "±12.20%",
            "unit": "ops/sec",
            "extra": "54 samples"
          },
          {
            "name": "Block 9422909",
            "value": 19515,
            "range": "±3.37%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "Block 9422910",
            "value": 20320,
            "range": "±3.56%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "Block 9422911",
            "value": 18896,
            "range": "±5.69%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "Block 9422912",
            "value": 10441,
            "range": "±15.25%",
            "unit": "ops/sec",
            "extra": "38 samples"
          },
          {
            "name": "Block 9422913",
            "value": 15948,
            "range": "±14.71%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "Block 9422914",
            "value": 17896,
            "range": "±4.43%",
            "unit": "ops/sec",
            "extra": "64 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pilll.PL22@gmail.com",
            "name": "v 1 r t l",
            "username": "talentlessguy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "94373a5b6b7f832c5fa468ca5c1a8564f284b32b",
          "message": "feat(util): remove ethjs-util dependency (#1517)",
          "timestamp": "2021-10-07T13:59:48-07:00",
          "tree_id": "73777365aafdf3fab2da553d6fda67a5ec47be35",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/94373a5b6b7f832c5fa468ca5c1a8564f284b32b"
        },
        "date": 1633640759184,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 14450,
            "range": "±4.32%",
            "unit": "ops/sec",
            "extra": "81 samples"
          },
          {
            "name": "Block 9422906",
            "value": 13714,
            "range": "±5.81%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Block 9422907",
            "value": 14529,
            "range": "±3.20%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422908",
            "value": 14306,
            "range": "±4.12%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422909",
            "value": 10838,
            "range": "±13.28%",
            "unit": "ops/sec",
            "extra": "60 samples"
          },
          {
            "name": "Block 9422910",
            "value": 13430,
            "range": "±3.92%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "Block 9422911",
            "value": 13945,
            "range": "±4.03%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Block 9422912",
            "value": 13654,
            "range": "±4.27%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422913",
            "value": 13631,
            "range": "±4.49%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Block 9422914",
            "value": 13381,
            "range": "±6.53%",
            "unit": "ops/sec",
            "extra": "74 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Holger.Drewes@gmail.com",
            "name": "Holger Drewes",
            "username": "holgerd77"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "88327f441cbe01c066da8d911b22174cf8a45785",
          "message": "block: add dynamic base fee instantiation example to the 1559 examples",
          "timestamp": "2021-10-11T11:22:24+02:00",
          "tree_id": "6b82af86a5da90ebeb8dfa8fcf283d0a2a7de61b",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/88327f441cbe01c066da8d911b22174cf8a45785"
        },
        "date": 1633944516499,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 16844,
            "range": "±3.15%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422906",
            "value": 15499,
            "range": "±6.65%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "Block 9422907",
            "value": 16703,
            "range": "±3.07%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422908",
            "value": 15840,
            "range": "±5.29%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Block 9422909",
            "value": 11406,
            "range": "±15.62%",
            "unit": "ops/sec",
            "extra": "64 samples"
          },
          {
            "name": "Block 9422910",
            "value": 15518,
            "range": "±4.05%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "Block 9422911",
            "value": 15962,
            "range": "±3.79%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422912",
            "value": 15273,
            "range": "±4.24%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "Block 9422913",
            "value": 14964,
            "range": "±6.10%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "Block 9422914",
            "value": 5948,
            "range": "±19.69%",
            "unit": "ops/sec",
            "extra": "31 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Holger.Drewes@gmail.com",
            "name": "Holger Drewes",
            "username": "holgerd77"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "986eb64dde1fa3761b19749d3d6aab8b06b6cbc7",
          "message": "block: small README update",
          "timestamp": "2021-10-11T11:23:20+02:00",
          "tree_id": "3c958e91d5d1204705fedfac812e9ff841981774",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/986eb64dde1fa3761b19749d3d6aab8b06b6cbc7"
        },
        "date": 1633944797439,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 22685,
            "range": "±5.73%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "Block 9422906",
            "value": 25341,
            "range": "±2.19%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "Block 9422907",
            "value": 20377,
            "range": "±13.05%",
            "unit": "ops/sec",
            "extra": "61 samples"
          },
          {
            "name": "Block 9422908",
            "value": 20269,
            "range": "±11.15%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "Block 9422909",
            "value": 24161,
            "range": "±1.84%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "Block 9422910",
            "value": 23057,
            "range": "±3.56%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "Block 9422911",
            "value": 10380,
            "range": "±13.49%",
            "unit": "ops/sec",
            "extra": "32 samples"
          },
          {
            "name": "Block 9422912",
            "value": 19673,
            "range": "±13.51%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "Block 9422913",
            "value": 17430,
            "range": "±12.59%",
            "unit": "ops/sec",
            "extra": "54 samples"
          },
          {
            "name": "Block 9422914",
            "value": 9206,
            "range": "±17.54%",
            "unit": "ops/sec",
            "extra": "41 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "vasiliy.serpokryl@mail.ru",
            "name": "Vasiliy Serpokryl",
            "username": "vserpokryl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5254d2c62115c54fc9233968c186dfae480f026b",
          "message": "Util: fix toUtf8() when there is a zero at the end of a line (#1522)",
          "timestamp": "2021-10-12T17:54:26+02:00",
          "tree_id": "72e8c7723de8db0a2994c2800a82824b3fa0348f",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/5254d2c62115c54fc9233968c186dfae480f026b"
        },
        "date": 1634054378374,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 23902,
            "range": "±6.57%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "Block 9422906",
            "value": 25492,
            "range": "±1.87%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422907",
            "value": 19594,
            "range": "±10.78%",
            "unit": "ops/sec",
            "extra": "59 samples"
          },
          {
            "name": "Block 9422908",
            "value": 23085,
            "range": "±2.35%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "Block 9422909",
            "value": 23732,
            "range": "±2.22%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "Block 9422910",
            "value": 22548,
            "range": "±4.30%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "Block 9422911",
            "value": 10791,
            "range": "±15.27%",
            "unit": "ops/sec",
            "extra": "35 samples"
          },
          {
            "name": "Block 9422912",
            "value": 20378,
            "range": "±3.25%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "Block 9422913",
            "value": 17046,
            "range": "±12.92%",
            "unit": "ops/sec",
            "extra": "55 samples"
          },
          {
            "name": "Block 9422914",
            "value": 11365,
            "range": "±26.42%",
            "unit": "ops/sec",
            "extra": "48 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Holger.Drewes@gmail.com",
            "name": "Holger Drewes",
            "username": "holgerd77"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a5de1a012ef5870574d419003ad7fd5effe80e70",
          "message": "VM: Fix accountExists inconsistency in StateManager (#1524)\n\n* vm -> StateManager, Cache: added a new virtual flag to indicate an account doesn't exist in the trie\r\n\r\n* vm -> Cache: fixed small virtual account value setting inconsistency on Cache delete update, added virtual param code docs\r\n\r\nCo-authored-by: acolytec3 <17355484+acolytec3@users.noreply.github.com>",
          "timestamp": "2021-10-13T14:16:17+02:00",
          "tree_id": "edf876a6f049e25c19e48ea08eaa141eafb4bdfa",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/a5de1a012ef5870574d419003ad7fd5effe80e70"
        },
        "date": 1634127735252,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 20595,
            "range": "±6.02%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "Block 9422906",
            "value": 21198,
            "range": "±2.86%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422907",
            "value": 20718,
            "range": "±3.45%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Block 9422908",
            "value": 15072,
            "range": "±13.71%",
            "unit": "ops/sec",
            "extra": "54 samples"
          },
          {
            "name": "Block 9422909",
            "value": 19352,
            "range": "±3.59%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "Block 9422910",
            "value": 19575,
            "range": "±3.58%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "Block 9422911",
            "value": 18957,
            "range": "±5.41%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "Block 9422912",
            "value": 10839,
            "range": "±16.85%",
            "unit": "ops/sec",
            "extra": "41 samples"
          },
          {
            "name": "Block 9422913",
            "value": 14906,
            "range": "±14.04%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "Block 9422914",
            "value": 17645,
            "range": "±5.03%",
            "unit": "ops/sec",
            "extra": "63 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Holger.Drewes@gmail.com",
            "name": "Holger Drewes",
            "username": "holgerd77"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "58e5e0d059d55965b349c922af0ca6177bcb7f26",
          "message": "Util: New Release v7.1.3 (#1525), rewrite of ethjs-util toUtf8 method, additional tests\n\n* util: rewrote toUtf8 method and removed from ethjs-util internal.ts import, added code docs, expanded tests\r\n\r\n* util: throw in toUtf8() method on uneven hex string input\r\n\r\n* util -> release: bumped version to v7.1.3, added CHANGELOG entry, updated upstream dependency versions\r\n\r\n* util -> release: rebuild documentation\r\n\r\n* Updated package-lock.json\r\n\r\n* Apply suggestions from code review\r\n\r\nchangelog grammar improvements\r\n\r\n* util -> release: added README note on ethjs-util internalization, temporary module doc links fix\r\n\r\nCo-authored-by: Ryan Ghods <ryan@ryanio.com>",
          "timestamp": "2021-10-14T13:04:35+02:00",
          "tree_id": "713e316ce01252008d2e291b4d79e02ce18ff907",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/58e5e0d059d55965b349c922af0ca6177bcb7f26"
        },
        "date": 1634209867344,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 17549,
            "range": "±7.77%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "Block 9422906",
            "value": 18630,
            "range": "±3.70%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "Block 9422907",
            "value": 18387,
            "range": "±3.91%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "Block 9422908",
            "value": 14098,
            "range": "±14.48%",
            "unit": "ops/sec",
            "extra": "52 samples"
          },
          {
            "name": "Block 9422909",
            "value": 17848,
            "range": "±4.50%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "Block 9422910",
            "value": 17950,
            "range": "±4.11%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "Block 9422911",
            "value": 17433,
            "range": "±4.11%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "Block 9422912",
            "value": 16840,
            "range": "±6.86%",
            "unit": "ops/sec",
            "extra": "64 samples"
          },
          {
            "name": "Block 9422913",
            "value": 7009,
            "range": "±14.18%",
            "unit": "ops/sec",
            "extra": "41 samples"
          },
          {
            "name": "Block 9422914",
            "value": 16669,
            "range": "±5.30%",
            "unit": "ops/sec",
            "extra": "65 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ryan@ryanio.com",
            "name": "Ryan Ghods",
            "username": "ryanio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7f0a06a68433e902a16a8aa8bc6fcdfc861be135",
          "message": "Merge pull request #1626 from ethereumjs/monorepo-add-rlp\n\nrlp: add to monorepo",
          "timestamp": "2022-01-10T17:08:04-08:00",
          "tree_id": "a32a8acc39b115fda08ec5d698864c342c3d8066",
          "url": "https://github.com/cbrzn/ethereumjs-monorepo/commit/7f0a06a68433e902a16a8aa8bc6fcdfc861be135"
        },
        "date": 1641909213606,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 18852,
            "range": "±5.68%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "Block 9422906",
            "value": 16238,
            "range": "±10.47%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "Block 9422907",
            "value": 19761,
            "range": "±1.90%",
            "unit": "ops/sec",
            "extra": "82 samples"
          },
          {
            "name": "Block 9422908",
            "value": 19382,
            "range": "±2.61%",
            "unit": "ops/sec",
            "extra": "82 samples"
          },
          {
            "name": "Block 9422910",
            "value": 19315,
            "range": "±2.12%",
            "unit": "ops/sec",
            "extra": "79 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ryan@ryanio.com",
            "name": "Ryan Ghods",
            "username": "ryanio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "aa7d323a1bddc5e1250c6861402c733037f32fa2",
          "message": "ci: add concurrency (#1667)\n\n* ci: add concurrency\r\n\r\n* clean up extra comment newlines (also testing that a new commit cancels in-progress runs)",
          "timestamp": "2022-01-27T13:19:26+01:00",
          "tree_id": "ccf3c6d488a77f9f7c8ba717dd9933c4a7568317",
          "url": "https://github.com/cbrzn/ethereumjs-monorepo/commit/aa7d323a1bddc5e1250c6861402c733037f32fa2"
        },
        "date": 1643647528460,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 11566,
            "range": "±5.99%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Block 9422906",
            "value": 12329,
            "range": "±2.69%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422907",
            "value": 10147,
            "range": "±9.89%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "Block 9422908",
            "value": 12483,
            "range": "±2.65%",
            "unit": "ops/sec",
            "extra": "81 samples"
          },
          {
            "name": "Block 9422910",
            "value": 12237,
            "range": "±3.44%",
            "unit": "ops/sec",
            "extra": "81 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cesarbrazon10@gmail.com",
            "name": "Cesar Brazon",
            "username": "cbrzn"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "f4f34c8d668c359aa56abd984ffa69aaac4f1b08",
          "message": "Client: Geth genesis parser minor fix (#1720)",
          "timestamp": "2022-02-16T11:26:49-08:00",
          "tree_id": "c2e5b085ea21e302149af021168ccb1f81448cdb",
          "url": "https://github.com/cbrzn/ethereumjs-monorepo/commit/f4f34c8d668c359aa56abd984ffa69aaac4f1b08"
        },
        "date": 1645214073669,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 11307,
            "range": "±4.29%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "Block 9422906",
            "value": 11048,
            "range": "±7.18%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "Block 9422907",
            "value": 11522,
            "range": "±3.15%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "Block 9422908",
            "value": 11430,
            "range": "±3.50%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "Block 9422910",
            "value": 9164,
            "range": "±18.39%",
            "unit": "ops/sec",
            "extra": "62 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "76567250+g11tech@users.noreply.github.com",
            "name": "g11tech",
            "username": "g11tech"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "c842a973bc8058df71cda140fe0720292e1aafe1",
          "message": "client: Jwt token based auth for engine api enabled via `rpcEngineAuth` arg (#1751)\n\n* Jwt token based auth for engine api",
          "timestamp": "2022-02-27T18:18:49-08:00",
          "tree_id": "3b918b21228ea4f82ee21ff14e225f0dabd74111",
          "url": "https://github.com/cbrzn/ethereumjs-monorepo/commit/c842a973bc8058df71cda140fe0720292e1aafe1"
        },
        "date": 1646089776395,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 21919,
            "range": "±6.78%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422906",
            "value": 22771,
            "range": "±1.21%",
            "unit": "ops/sec",
            "extra": "82 samples"
          },
          {
            "name": "Block 9422907",
            "value": 19366,
            "range": "±12.84%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "Block 9422908",
            "value": 21843,
            "range": "±2.56%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422910",
            "value": 21829,
            "range": "±1.59%",
            "unit": "ops/sec",
            "extra": "79 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ryan@ryanio.com",
            "name": "Ryan Ghods",
            "username": "ryanio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "2771a8becde2c6926a8e080194932491be01895b",
          "message": "client: kiln touchups (#1778)\n\n* util/rpc.spec.ts: add more coverage cases\r\n\r\n* re-add accidentially removed test\r\n\r\n* slim withEngineMiddleware fn",
          "timestamp": "2022-03-11T10:53:42+01:00",
          "tree_id": "f8a7c6d29b73b756ece84b23c66dcd57449888f6",
          "url": "https://github.com/cbrzn/ethereumjs-monorepo/commit/2771a8becde2c6926a8e080194932491be01895b"
        },
        "date": 1647015845983,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 20602,
            "range": "±7.70%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "Block 9422906",
            "value": 21850,
            "range": "±1.93%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422907",
            "value": 17534,
            "range": "±18.43%",
            "unit": "ops/sec",
            "extra": "61 samples"
          },
          {
            "name": "Block 9422908",
            "value": 21542,
            "range": "±1.47%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Block 9422910",
            "value": 21780,
            "range": "±3.94%",
            "unit": "ops/sec",
            "extra": "74 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cesarbrazon10@gmail.com",
            "name": "Cesar Brazon",
            "username": "cbrzn"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "1a859a9dad24b5d9f95434acc249cc9a01e80bc5",
          "message": "Client: Terminal block validation (#1797)\n\n* client/engine: add terminal block validation\r\n* client/engine: test to validate terminal block added\r\n* fixup! client/engine: test to validate terminal block added\r\n* fixing the conditions\r\n* Update packages/client/lib/rpc/modules/engine.ts\r\n* fixup! Update packages/client/lib/rpc/modules/engine.ts\r\n* Update packages/client/lib/rpc/modules/engine.ts\r\n* Update packages/client/lib/rpc/modules/engine.ts\r\n* client/engine: add test case for invalid terminal block with 1+ blocks\r\n* fix hf.td check when 0\r\n* nit: dependency order (order: external deps -> internal deps -> local relative paths)\r\nCo-authored-by: harkamal <gajinder@g11.in>\r\nCo-authored-by: Ryan Ghods <ryan@ryanio.com>",
          "timestamp": "2022-03-17T18:26:05-07:00",
          "tree_id": "bfa94afaefd5c55d050bdcc547d34a53f931225d",
          "url": "https://github.com/cbrzn/ethereumjs-monorepo/commit/1a859a9dad24b5d9f95434acc249cc9a01e80bc5"
        },
        "date": 1647634620615,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 22133,
            "range": "±6.97%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422906",
            "value": 23314,
            "range": "±1.19%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "Block 9422907",
            "value": 20007,
            "range": "±13.72%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "Block 9422908",
            "value": 22901,
            "range": "±1.16%",
            "unit": "ops/sec",
            "extra": "82 samples"
          },
          {
            "name": "Block 9422910",
            "value": 22437,
            "range": "±1.40%",
            "unit": "ops/sec",
            "extra": "79 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Holger.Drewes@gmail.com",
            "name": "Holger Drewes",
            "username": "holgerd77"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "5c25698475b39d4a0c4c1abeec4039435c9e157e",
          "message": "Client: Merge/HF Logger Improvements (#1800)\n\n* Client: added hardfork changed note on chain HF update (with dedicated Merge note)\r\n\r\n* Client: added logger attention API, HF attention notes on non-merge HFs and the Merge\r\n\r\n* Client: added basic connection status notification to Engine API\r\n\r\n* Client: added consensus client connection check to Engine API, clear connection status indicator\r\n\r\n* Client: added regular Engine API paylod and forkchoice logging\r\n\r\n* refactor out to CLConnectionManager, add Event.CLIENT_SHUTDOWN to clear intervals\r\n\r\n* some refactor to logging.ts to make it easier to read\r\n\r\n* use hardforkTD(Hardfork.Merge) rather than hardforks().find ... thanks for the tip @holgerd77!\r\n\r\n* fix race condition on transition block by using hardforkByTD in Block constructor opts\r\n\r\n* add ConnectionStatus.Lost to update `[ CL ? ]` -> `[ CL ]` when re-established\r\n\r\n* adjust / improve log intervals\r\n\r\n* fix td remaining comparison\r\n\r\n* fix file name\r\n\r\n* improve readability\r\n\r\n* remove superflous word (`with` in `with txs=num`)\r\n\r\n* set attentionHF when within 10% of ttd\r\n\r\n* move client shutdown to client class\r\n\r\n* nits, silent invalid tx logger error\r\n\r\n* start CLConnectionManager once we hit PreMerge (should fix hanging), emit shutdown event in integration tests\r\n\r\n* last fix\r\n\r\nCo-authored-by: Ryan Ghods <ryan@ryanio.com>",
          "timestamp": "2022-03-19T13:03:26+01:00",
          "tree_id": "50fd4b5cc45ec17ab656a7d632faf4aec241fc13",
          "url": "https://github.com/cbrzn/ethereumjs-monorepo/commit/5c25698475b39d4a0c4c1abeec4039435c9e157e"
        },
        "date": 1647817814314,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 16746,
            "range": "±7.87%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "Block 9422906",
            "value": 17882,
            "range": "±2.75%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "Block 9422907",
            "value": 16893,
            "range": "±7.53%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "Block 9422908",
            "value": 13676,
            "range": "±26.42%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "Block 9422910",
            "value": 17410,
            "range": "±2.43%",
            "unit": "ops/sec",
            "extra": "71 samples"
          }
        ]
      }
    ]
  }
}