import{d as s}from"./app.a4a220e4.js";import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=s(`<h1 id="\u7B2C-6-\u7AE0-\u96C6\u5408\u5F15\u7528\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u7B2C-6-\u7AE0-\u96C6\u5408\u5F15\u7528\u7C7B\u578B" aria-hidden="true">#</a> \u7B2C 6 \u7AE0 \u96C6\u5408\u5F15\u7528\u7C7B\u578B</h1><p>\u672C\u7AE0\u5185\u5BB9\uFF1A\u5BF9\u8C61\uFF0C\u6570\u7EC4\u4E0E\u5B9A\u578B\u6570\u7EC4\uFF0CMap\u3001 WeakMap\u3001 Set \u4EE5\u53CA WeakSet \u7C7B\u578B</p><h2 id="_6-1-object" tabindex="-1"><a class="header-anchor" href="#_6-1-object" aria-hidden="true">#</a> 6.1 Object</h2><p>\u5230\u76EE\u524D\u4E3A\u6B62\uFF0C\u5927\u591A\u6570\u5F15\u7528\u503C\u7684\u793A\u4F8B\u4F7F\u7528\u7684\u662F Object \u7C7B\u578B\u3002 Object \u662F ECMAScript \u4E2D\u6700\u5E38\u7528\u7684\u7C7B\u578B\u4E4B\u4E00\u3002\u867D\u7136 Object \u7684\u5B9E\u4F8B\u6CA1\u6709\u591A\u5C11\u529F\u80FD\uFF0C\u4F46\u5F88\u9002\u5408\u5B58\u50A8\u548C\u5728\u5E94\u7528\u7A0B\u5E8F\u95F4\u4EA4\u6362\u6570\u636E\u3002</p><p>\u663E\u5F0F\u5730\u521B\u5EFA Object \u7684\u5B9E\u4F8B\u6709\u4E24\u79CD\u65B9\u5F0F\u3002\u7B2C\u4E00\u79CD\u662F\u4F7F\u7528 new \u64CD\u4F5C\u7B26\u548C Object \u6784\u9020\u51FD\u6570\uFF0C \u5982\u4E0B\u6240\u793A\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> person <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
person<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;Nicholas&quot;</span><span class="token punctuation">;</span>
person<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">29</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u53E6\u4E00\u79CD\u65B9\u5F0F\u662F\u4F7F\u7528\u5BF9\u8C61\u5B57\u9762\u91CF\uFF08 object literal\uFF09\u8868\u793A\u6CD5\u3002\u5BF9\u8C61\u5B57\u9762\u91CF\u662F\u5BF9\u8C61\u5B9A\u4E49\u7684\u7B80\u5199\u5F62\u5F0F\uFF0C\u76EE\u7684\u662F\u4E3A\u4E86\u7B80\u5316\u5305\u542B\u5927\u91CF\u5C5E\u6027\u7684\u5BF9\u8C61\u7684\u521B\u5EFA\u3002\u6BD4\u5982\uFF0C\u4E0B\u9762\u7684\u4EE3\u7801\u5B9A\u4E49\u4E86\u4E0E\u524D\u9762\u793A\u4F8B\u76F8\u540C\u7684 person \u5BF9\u8C61\uFF0C\u4F46\u4F7F\u7528\u7684\u662F\u5BF9\u8C61\u5B57\u9762\u91CF\u8868\u793A\u6CD5\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;Nicholas&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">29</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u5728\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\uFF0C\u5DE6\u5927\u62EC\u53F7\uFF08 {\uFF09\u8868\u793A\u5BF9\u8C61\u5B57\u9762\u91CF\u5F00\u59CB\uFF0C\u56E0\u4E3A\u5B83\u51FA\u73B0\u5728\u4E00\u4E2A\u8868\u8FBE\u5F0F\u4E0A\u4E0B\u6587\uFF08expression context\uFF09\u4E2D\u3002\u5728 ECMAScript \u4E2D\uFF0C\u8868\u8FBE\u5F0F\u4E0A\u4E0B\u6587\u6307\u7684\u662F\u671F\u5F85\u8FD4\u56DE\u503C\u7684\u4E0A\u4E0B\u6587\u3002\u8D4B\u503C\u64CD\u4F5C\u7B26\u8868\u793A\u540E\u9762\u8981\u671F\u5F85\u4E00\u4E2A\u503C\uFF0C\u56E0\u6B64\u5DE6\u5927\u62EC\u53F7\u8868\u793A\u4E00\u4E2A\u8868\u8FBE\u5F0F\u7684\u5F00\u59CB\u3002\u540C\u6837\u662F\u5DE6\u5927\u62EC\u53F7\uFF0C\u5982\u679C\u51FA\u73B0\u5728\u8BED\u53E5\u4E0A\u4E0B\u6587\uFF08statement context\uFF09\u4E2D\uFF0C\u6BD4\u5982 if \u8BED\u53E5\u7684\u6761\u4EF6\u540E\u9762\uFF0C\u5219\u8868\u793A\u4E00\u4E2A\u8BED\u53E5\u5757\u7684\u5F00\u59CB\u3002</p><p>\u63A5\u4E0B\u6765\u6307\u5B9A\u4E86 name \u5C5E\u6027\uFF0C\u540E\u8DDF\u4E00\u4E2A\u5192\u53F7\uFF0C\u7136\u540E\u662F\u5C5E\u6027\u7684\u503C\u3002\u9017\u53F7\u7528\u4E8E\u5728\u5BF9\u8C61\u5B57\u9762\u91CF\u4E2D\u5206\u9694\u5C5E\u6027\uFF0C\u56E0\u6B64\u5B57\u7B26\u4E32&quot;Nicholas&quot;\u540E\u9762\u6709\u4E00\u4E2A\u9017\u53F7\uFF0C\u800C 29 \u540E\u9762\u6CA1\u6709\uFF0C\u56E0\u4E3A age \u662F\u8FD9\u4E2A\u5BF9\u8C61\u7684\u6700\u540E\u4E00\u4E2A\u5C5E\u6027\u3002\u5728\u6700\u540E\u4E00\u4E2A\u5C5E\u6027\u540E\u9762\u52A0\u4E0A\u9017\u53F7\u5728\u975E\u5E38\u8001\u7684\u6D4F\u89C8\u5668\u4E2D\u4F1A\u5BFC\u81F4\u62A5\u9519\uFF0C\u4F46\u6240\u6709\u73B0\u4EE3\u6D4F\u89C8\u5668\u90FD\u652F\u6301\u8FD9\u79CD\u5199\u6CD5\u3002\u5728\u5BF9\u8C61\u5B57\u9762\u91CF\u8868\u793A\u6CD5\u4E2D\uFF0C\u5C5E\u6027\u540D\u53EF\u4EE5\u662F\u5B57\u7B26\u4E32\u6216\u6570\u503C\uFF0C\u6BD4\u5982\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;Nicholas&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">29</span><span class="token punctuation">,</span>
  <span class="token number">5</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>`,11);function p(t,o){return e}var l=n(a,[["render",p]]);export{l as default};
