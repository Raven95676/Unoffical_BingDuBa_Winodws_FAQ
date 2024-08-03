import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as e,o,a as n}from"./app-C2fUO7zu.js";const a={},i=n('<p>首先需要明确，现在没有任何手段可以100%防御电脑端勒索病毒。手机只要不乱安装软件乱授权或者随便登别人的Apple ID都没有大问题。</p><p>下面是从几个方面来进行勒索病毒的防御。</p><h2 id="windows-defender用户" tabindex="-1"><a class="header-anchor" href="#windows-defender用户"><span>Windows Defender用户</span></a></h2><p>使用Windows defender的用户可以打开wd的“防勒索保护”以获得更高的防勒索能力。方法请参照：<a href="https://jingyan.baidu.com/article/495ba841b715e538b20ede66.html" target="_blank" rel="noopener noreferrer">Win10怎么样使用Defender防止勒索病毒</a></p><h2 id="安全辅助软件" tabindex="-1"><a class="header-anchor" href="#安全辅助软件"><span>安全辅助软件</span></a></h2><div class="hint-container note"><p class="hint-container-title">注</p><p>使用的样本 SHA256为：7de7ce42cde20847749fa5bc4048cf5cacec8c2bf49169d7d262ea38630640ea</p></div><p>在原有杀毒软件的情况下，可以使用安全辅助软件对系统进行布防。关于安全辅助软件，请参阅<a href="https://raven95676.github.io/prevention/6_auxiliary_antivirus.html" target="_blank" rel="noopener noreferrer">正确利用杀软辅助工具</a>。</p><h3 id="_360文档卫士" tabindex="-1"><a class="header-anchor" href="#_360文档卫士"><span><a href="https://weishi.360.cn/wendangweishi.html" target="_blank" rel="noopener noreferrer">360文档卫士</a></span></a></h3><div class="hint-container caution"><p class="hint-container-title">警告</p><p>需要保证在勒索软件彻底清除完成的情况下才能进行还原，否则还原后的文件将继续被加密。</p></div><p>优点：在文档作出更改时自动备份文档，除非文档卫士本身遭到针对性攻击，不然备份文件基本上是安全的。</p><p>缺点：就像名字一样，默认情况下只保护100MB以下的文档（doc、docx、ppt、pptx、xls、xlsx、pdf），不保护图片、视频等，不保护txt。</p><figure><img src="https://ooo.0x0.ooo/2024/08/02/OtMFVF.png" alt="恢复页面" tabindex="0" loading="lazy"><figcaption>恢复页面</figcaption></figure><p>在被加密后自行恢复即可</p><h3 id="kaspersky-anti-ransomware-tool-kart" tabindex="-1"><a class="header-anchor" href="#kaspersky-anti-ransomware-tool-kart"><span><a href="https://www.kaspersky.com/anti-ransomware-tool" target="_blank" rel="noopener noreferrer">Kaspersky Anti-Ransomware Tool</a>（KART）</span></a></h3><div class="hint-container note"><p class="hint-container-title">注</p><p>本软件只能Block（封锁）病毒，需要手动将被封锁的病毒删除。</p></div><p>优点：ksn（卡巴斯基安全云）和卡巴主防的提炼，在不安装卡巴斯基的情况下提供较为全面的保护，具有回滚能力。</p><div class="hint-container caution"><p class="hint-container-title">警告</p><p>缺点：回滚不是万能的。存在病毒造成了破坏但是杀毒软件没有识别到或者没有成功回滚的可能。</p><p>见到缺点能用这个提示框你应该明白这意味着什么（</p></div><figure><img src="https://ooo.0x0.ooo/2024/08/02/OtM1Qb.png" alt="样本在断网的情况下被主防杀" tabindex="0" loading="lazy"><figcaption>样本在断网的情况下被主防杀</figcaption></figure><figure><img src="https://ooo.0x0.ooo/2024/08/02/OtM73l.png" alt="回滚了被加密的两个文件" tabindex="0" loading="lazy"><figcaption>回滚了被加密的两个文件</figcaption></figure><p>附：<strong>K</strong>aspersky <strong>A</strong>nti-<strong>R</strong>ansomware <strong>T</strong>ool（KART）的使用指南</p><figure><img src="https://ooo.0x0.ooo/2024/08/02/OtMprC.png" alt="全勾上然后一路Next" tabindex="0" loading="lazy"><figcaption>全勾上然后一路Next</figcaption></figure><figure><img src="https://ooo.0x0.ooo/2024/08/02/OtMmqN.png" alt="关掉引导提示" tabindex="0" loading="lazy"><figcaption>关掉引导提示</figcaption></figure><figure><img src="https://ooo.0x0.ooo/2024/08/02/OtMyVS.png" alt="点击注册" tabindex="0" loading="lazy"><figcaption>点击注册</figcaption></figure><figure><img src="https://ooo.0x0.ooo/2024/08/02/OtMZbK.png" alt="全填上" tabindex="0" loading="lazy"><figcaption>全填上</figcaption></figure><figure><img src="https://ooo.0x0.ooo/2024/08/02/OtMvma.png" alt="圈起来的是邮箱收到的要输入的激活码" tabindex="0" loading="lazy"><figcaption>圈起来的是邮箱收到的要输入的激活码</figcaption></figure><figure><img src="https://ooo.0x0.ooo/2024/08/02/OtMeig.png" alt="打开设置" tabindex="0" loading="lazy"><figcaption>打开设置</figcaption></figure><figure><img src="https://ooo.0x0.ooo/2024/08/02/OtMr4B.png" alt="打开额外的防护" tabindex="0" loading="lazy"><figcaption>打开额外的防护</figcaption></figure><figure><img src="https://ooo.0x0.ooo/2024/08/02/OtMA2s.png" alt="UnBlock是解除警报，Move to trust是移到信任" tabindex="0" loading="lazy"><figcaption>UnBlock是解除警报，Move to trust是移到信任</figcaption></figure><h2 id="备份" tabindex="-1"><a class="header-anchor" href="#备份"><span>备份</span></a></h2><p>无论何时，保护数据安全备份都是第一王道。尤其是离机备份。。买一块移动硬盘，把重要文件拷贝到里面。需要修改的话就复制一份到主机改完了再覆盖到移动硬盘。</p><div class="hint-container caution"><p class="hint-container-title">警告</p><p>移动硬盘若是固态硬盘则需要定期通电（不是用充电器通电，是连到电脑上通电）才能保证数据不会丢失。推荐购买机械硬盘以供长时间储存。（注意防震）</p></div><p>或者你可以选择将文件上传至公有云（注意隐私，以及公有云跑路问题）或者使用nas设备，在此不再赘述。</p>',32),r=[i];function p(s,l){return o(),e("div",null,r)}const d=t(a,[["render",p],["__file","5_ransomware_prevention.html.vue"]]),h=JSON.parse('{"path":"/prevention/5_ransomware_prevention.html","title":"关于反勒索病毒的两三事","lang":"zh-CN","frontmatter":{"title":"关于反勒索病毒的两三事","author":"Raven95676","date":"2024-07-29T00:00:00.000Z","icon":"fas fa-file","category":["预先防毒"],"tag":["系统防护","反勒索"],"isOriginal":true,"order":5,"description":"首先需要明确，现在没有任何手段可以100%防御电脑端勒索病毒。手机只要不乱安装软件乱授权或者随便登别人的Apple ID都没有大问题。 下面是从几个方面来进行勒索病毒的防御。 Windows Defender用户 使用Windows defender的用户可以打开wd的“防勒索保护”以获得更高的防勒索能力。方法请参照：Win10怎么样使用Defende...","head":[["meta",{"property":"og:url","content":"https://raven95676.github.io/prevention/5_ransomware_prevention.html"}],["meta",{"property":"og:site_name","content":"非官方病毒吧Windows FAQ"}],["meta",{"property":"og:title","content":"关于反勒索病毒的两三事"}],["meta",{"property":"og:description","content":"首先需要明确，现在没有任何手段可以100%防御电脑端勒索病毒。手机只要不乱安装软件乱授权或者随便登别人的Apple ID都没有大问题。 下面是从几个方面来进行勒索病毒的防御。 Windows Defender用户 使用Windows defender的用户可以打开wd的“防勒索保护”以获得更高的防勒索能力。方法请参照：Win10怎么样使用Defende..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://ooo.0x0.ooo/2024/08/02/OtMFVF.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-03T03:46:46.000Z"}],["meta",{"property":"article:author","content":"Raven95676"}],["meta",{"property":"article:tag","content":"系统防护"}],["meta",{"property":"article:tag","content":"反勒索"}],["meta",{"property":"article:published_time","content":"2024-07-29T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-03T03:46:46.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"关于反勒索病毒的两三事\\",\\"image\\":[\\"https://ooo.0x0.ooo/2024/08/02/OtMFVF.png\\",\\"https://ooo.0x0.ooo/2024/08/02/OtM1Qb.png\\",\\"https://ooo.0x0.ooo/2024/08/02/OtM73l.png\\",\\"https://ooo.0x0.ooo/2024/08/02/OtMprC.png\\",\\"https://ooo.0x0.ooo/2024/08/02/OtMmqN.png\\",\\"https://ooo.0x0.ooo/2024/08/02/OtMyVS.png\\",\\"https://ooo.0x0.ooo/2024/08/02/OtMZbK.png\\",\\"https://ooo.0x0.ooo/2024/08/02/OtMvma.png\\",\\"https://ooo.0x0.ooo/2024/08/02/OtMeig.png\\",\\"https://ooo.0x0.ooo/2024/08/02/OtMr4B.png\\",\\"https://ooo.0x0.ooo/2024/08/02/OtMA2s.png\\"],\\"datePublished\\":\\"2024-07-29T00:00:00.000Z\\",\\"dateModified\\":\\"2024-08-03T03:46:46.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Raven95676\\"}]}"]]},"headers":[{"level":2,"title":"Windows Defender用户","slug":"windows-defender用户","link":"#windows-defender用户","children":[]},{"level":2,"title":"安全辅助软件","slug":"安全辅助软件","link":"#安全辅助软件","children":[{"level":3,"title":"360文档卫士","slug":"_360文档卫士","link":"#_360文档卫士","children":[]},{"level":3,"title":"Kaspersky Anti-Ransomware Tool（KART）","slug":"kaspersky-anti-ransomware-tool-kart","link":"#kaspersky-anti-ransomware-tool-kart","children":[]}]},{"level":2,"title":"备份","slug":"备份","link":"#备份","children":[]}],"git":{"createdTime":1722258953000,"updatedTime":1722656806000,"contributors":[{"name":"Raven95676","email":"Raven95676@proton.me","commits":7}]},"readingTime":{"minutes":2.72,"words":817},"filePathRelative":"prevention/5_ransomware_prevention.md","localizedDate":"2024年7月29日","autoDesc":true}');export{d as comp,h as data};
