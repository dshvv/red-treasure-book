const e=JSON.parse('{"key":"v-94321834","path":"/guide/%E7%AC%AC18%E7%AB%A0_%E5%8A%A8%E7%94%BB%E4%B8%8ECanvas%E5%9B%BE%E5%BD%A2.html","title":"\u7B2C18\u7AE0 \u52A8\u753B\u4E0ECanvas\u56FE\u5F62","lang":"zh-CN","frontmatter":{"lang":"zh-CN","title":"\u7B2C18\u7AE0 \u52A8\u753B\u4E0ECanvas\u56FE\u5F62","description":"\u4F7F\u7528 requestAnimationFrame\u3001\u7406\u89E3`<canvas>`\u5143\u7D20\u3001\u7ED8\u5236\u7B80\u5355 2D \u56FE\u5F62\u3001\u4F7F\u7528 WebGL \u7ED8\u5236 3D \u56FE\u5F62","order":18,"head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-v2-demo.mrhope.site/red-treasure-book/dist/guide/%E7%AC%AC18%E7%AB%A0_%E5%8A%A8%E7%94%BB%E4%B8%8ECanvas%E5%9B%BE%E5%BD%A2.html"}],["meta",{"property":"og:site_name","content":"JavaScript\u9AD8\u7EA7\u7A0B\u5E8F\u8BBE\u8BA1\u2074"}],["meta",{"property":"og:title","content":"\u7B2C18\u7AE0 \u52A8\u753B\u4E0ECanvas\u56FE\u5F62"}],["meta",{"property":"og:description","content":"\u4F7F\u7528 requestAnimationFrame\u3001\u7406\u89E3`<canvas>`\u5143\u7D20\u3001\u7ED8\u5236\u7B80\u5355 2D \u56FE\u5F62\u3001\u4F7F\u7528 WebGL \u7ED8\u5236 3D \u56FE\u5F62"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-06-17T10:13:11.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-06-17T10:13:11.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"18.1 \u4F7F\u7528 requestAnimationFrame","slug":"_18-1-\u4F7F\u7528-requestanimationframe","children":[{"level":3,"title":"18.1.1 \u65E9\u671F\u5B9A\u65F6\u52A8\u753B","slug":"_18-1-1-\u65E9\u671F\u5B9A\u65F6\u52A8\u753B","children":[]},{"level":3,"title":"18.1.2 \u65F6\u95F4\u95F4\u9694\u7684\u95EE\u9898","slug":"_18-1-2-\u65F6\u95F4\u95F4\u9694\u7684\u95EE\u9898","children":[]},{"level":3,"title":"18.1.3 requestAnimationFrame","slug":"_18-1-3-requestanimationframe","children":[]},{"level":3,"title":"18.1.4 cancelAnimationFrame","slug":"_18-1-4-cancelanimationframe","children":[]},{"level":3,"title":"18.1.5 \u901A\u8FC7 requestAnimationFrame \u8282\u6D41","slug":"_18-1-5-\u901A\u8FC7-requestanimationframe-\u8282\u6D41","children":[]}]},{"level":2,"title":"18.2 \u57FA\u672C\u7684\u753B\u5E03\u529F\u80FD","slug":"_18-2-\u57FA\u672C\u7684\u753B\u5E03\u529F\u80FD","children":[]},{"level":2,"title":"18.3 2D \u7ED8\u56FE\u4E0A\u4E0B\u6587","slug":"_18-3-2d-\u7ED8\u56FE\u4E0A\u4E0B\u6587","children":[{"level":3,"title":"18.3.1 \u586B\u5145\u548C\u63CF\u8FB9","slug":"_18-3-1-\u586B\u5145\u548C\u63CF\u8FB9","children":[]},{"level":3,"title":"18.3.2 \u7ED8\u5236\u77E9\u5F62","slug":"_18-3-2-\u7ED8\u5236\u77E9\u5F62","children":[]},{"level":3,"title":"18.3.3 \u7ED8\u5236\u8DEF\u5F84","slug":"_18-3-3-\u7ED8\u5236\u8DEF\u5F84","children":[]},{"level":3,"title":"18.3.4 \u7ED8\u5236\u6587\u672C","slug":"_18-3-4-\u7ED8\u5236\u6587\u672C","children":[]},{"level":3,"title":"18.3.5 \u53D8\u6362","slug":"_18-3-5-\u53D8\u6362","children":[]},{"level":3,"title":"18.3.6 \u7ED8\u5236\u56FE\u50CF","slug":"_18-3-6-\u7ED8\u5236\u56FE\u50CF","children":[]},{"level":3,"title":"18.3.7 \u9634\u5F71","slug":"_18-3-7-\u9634\u5F71","children":[]},{"level":3,"title":"18.3.8 \u6E10\u53D8","slug":"_18-3-8-\u6E10\u53D8","children":[]},{"level":3,"title":"18.3.9 \u56FE\u6848","slug":"_18-3-9-\u56FE\u6848","children":[]},{"level":3,"title":"18.3.10 \u56FE\u50CF\u6570\u636E","slug":"_18-3-10-\u56FE\u50CF\u6570\u636E","children":[]},{"level":3,"title":"18.3.11 \u5408\u6210","slug":"_18-3-11-\u5408\u6210","children":[]}]},{"level":2,"title":"18.4 WebGL","slug":"_18-4-webgl","children":[{"level":3,"title":"18.4.1 WebGL \u4E0A\u4E0B\u6587","slug":"_18-4-1-webgl-\u4E0A\u4E0B\u6587","children":[]},{"level":3,"title":"18.4.2 WebGL \u57FA\u7840","slug":"_18-4-2-webgl-\u57FA\u7840","children":[]},{"level":3,"title":"18.4.3 WebGL1 \u4E0E WebGL2","slug":"_18-4-3-webgl1-\u4E0E-webgl2","children":[]}]},{"level":2,"title":"18.5 \u5C0F\u7ED3","slug":"_18-5-\u5C0F\u7ED3","children":[]}],"git":{"createdTime":1655460791000,"updatedTime":1655460791000,"contributors":[{"name":"\u4E01\u5C11\u534E","email":"960423114@qq.com","commits":1}]},"readingTime":{"minutes":58.41,"words":17523},"filePathRelative":"guide/\u7B2C18\u7AE0_\u52A8\u753B\u4E0ECanvas\u56FE\u5F62.md","localizedDate":"2022\u5E746\u670817\u65E5"}');export{e as data};
