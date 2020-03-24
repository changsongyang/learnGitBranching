exports.level = {
  "goalTreeString": "{\"branches\":{\"master\":{\"target\":\"C1\",\"id\":\"master\",\"remoteTrackingBranchID\":\"o/master\"},\"o/master\":{\"target\":\"C1\",\"id\":\"o/master\",\"remoteTrackingBranchID\":null},\"feature\":{\"target\":\"C2\",\"id\":\"feature\",\"remoteTrackingBranchID\":\"o/feature\"},\"o/feature\":{\"target\":\"C2\",\"id\":\"o/feature\",\"remoteTrackingBranchID\":null}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"},\"C2\":{\"parents\":[\"C1\"],\"id\":\"C2\"}},\"tags\":{},\"HEAD\":{\"target\":\"feature\",\"id\":\"HEAD\"},\"originTree\":{\"branches\":{\"master\":{\"target\":\"C1\",\"id\":\"master\",\"remoteTrackingBranchID\":null},\"feature\":{\"target\":\"C2\",\"id\":\"feature\",\"remoteTrackingBranchID\":null}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"},\"C2\":{\"parents\":[\"C1\"],\"id\":\"C2\"}},\"tags\":{},\"HEAD\":{\"target\":\"master\",\"id\":\"HEAD\"}}}",
  "solutionCommand": "git reset --hard o/master;git checkout -b feature C2; git push origin feature",
  "startTree": "{\"branches\":{\"master\":{\"target\":\"C2\",\"id\":\"master\",\"remoteTrackingBranchID\":\"o/master\"},\"o/master\":{\"target\":\"C1\",\"id\":\"o/master\",\"remoteTrackingBranchID\":null}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"},\"C2\":{\"parents\":[\"C1\"],\"id\":\"C2\"}},\"tags\":{},\"HEAD\":{\"target\":\"master\",\"id\":\"HEAD\"},\"originTree\":{\"branches\":{\"master\":{\"target\":\"C1\",\"id\":\"master\",\"remoteTrackingBranchID\":null}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"}},\"tags\":{},\"HEAD\":{\"target\":\"master\",\"id\":\"HEAD\"}}}",
  "hint": {
    "en_US": "Make the feature branch from the local master before resetting it back to be the same as origin's master",
    "ru_RU": "Создайте новую feature ветвь от master перед тем, как откатить изменения в master до состояния o/master.",
    "zh_CN": "从本地的master创建一个feature分支, 然后重置master和origin master保持一致。",
    "es_ES": "Crea la rama feature desde la rama master en local antes de restablecerlo para que sea el mismo que la rama master de origen",
    "ko"   : "로컬 저장소의 master 브랜치로부터 feature 브랜치를 만드세요. 그리고 o/master와 같아질 수 있도록 로컬 저장소의 master 브랜치를 reset 하세요."  
  },
  "name": {
    "en_US": "Locked Master",
    "ru_RU": "Заблокированная ветвь master",
    "zh_CN": "锁定的Master(Locked Master)",
    "es_ES": "Master bloqueado",
    "ko"   : "잠겨버린 Master"
  },
  "startDialog": {
    "en_US": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Remote Rejected!",
              "",
              "If you work on a large collaborative team its likely that master is locked and requires some Pull Request process to merge changes. If you commit directly to master locally and try pushing you will be greeted with a message similar to this:",
              "",
              "```",
              " ! [remote rejected] master -> master (TF402455: Pushes to this branch are not permitted; you must use a pull request to update this branch.)",
              "```"
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Why was it rejected?",
              "",
              "The remote rejected the push of commits directly to master because of the policy on master requiring pull requests to instead be used.",
              "",
              "You meant to follow the process creating a branch then pushing that branch and doing a pull request, but you forgot and committed directly to master. Now you are stuck and cannot push your changes."
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## The solution",
              "",
              "Create another branch called feature and push that to the remote. Also reset your master back to be in sync with the remote otherwise you may have issues next time you do a pull and someone else's commit conflicts with yours."
            ]
          }
        }
      ]
    },
    "zh_CN": {
        "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## 远程服务器拒绝!(Remote Rejected)",
              "",
              "如果你是在一个大的合作团队中工作, 很可能是master被锁定了, 需要一些Pull Request流程来合并修改。如果你直接提交(commit)到本地master, 然后试图推送(push)修改, 你将会收到这样类似的信息:",
              "",
              "```",
              " ! [远程服务器拒绝] master -> master (TF402455: 不允许推送(push)这个分支; 你必须使用pull request来更新这个分支.)",
              "```"
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## 为什么会被拒绝?",
              "",
              "远程服务器拒绝直接推送(push)提交到master, 因为策略配置要求 pull requests 来提交更新.",
              "",
              "你应该按照流程,新建一个分支, 推送(push)这个分支并申请pull request,但是你忘记并直接提交给了master.现在你卡住并且无法推送你的更新."
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## 解决办法",
              "",
              "新建一个分支feature, 推送到远程服务器. 然后reset你的master分支和远程服务器保持一致, 否则下次你pull并且他人的提交和你冲突的时候就会有问题."
            ]
          }
        }
      ]
    },
    "ru_RU": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Remote Rejected!",
              "",
              "Когда вы работаете в составе большой команды разработчиков над проектом, то, вероятнее всего, ветвь `master` будет _заблокирована_. Для внесения изменений в неё в git существует понятие запроса на слияние `Pull Request`. В такой ситуации если вы закоммитите свои наработки непосредственно в `master` ветвь, а после выполните `git push`, то будет сгенерировано сообщение об ошибке:",
              "",
              "```",
              " ! [remote rejected] master -> master (TF402455: Pushes to this branch are not permitted; you must use a pull request to update this branch.)",
              "```",
              "",
              "```",
              " ! [удалённо отклонено] master -> master (TF402455: Изменение этой ветви запрещены; вы можете использовать pull request для обновления этой ветви.)",
              "```"
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Почему произошло отклонение моих изменений?",
              "",
              "Удалённый репозиторий отклонил загруженные коммиты непосредственно в `master` ветку потому, что на `master` _настроена политика_, которая требует использование `Pull request` вместо обычного `git push`.",
              "",
              "Эта политика подразумевает процесс создания новой ветви разработки, внесение в неё всех необходимых коммитов, загрузка изменений в удалённый репозиторий и _открытие нового_ `Pull request`. Однако вы забыли про это и закоммитили наработки непосредственно в `master` ветвь. Теперь вы застряли и не можете запушить свои изменения :(. "
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Решение:",
              "",
              "Создайте ещё одну ветвь под названием `feature` и отправьте изменения на удалённый репозиторий. Так же не забудьте вернуть вашу локальную `master` ветвь в исходное состояние (чтобы она была синхронизирована с удалённой). В противном случае у вас могут возникнуть проблемы при следующем выполнении `git pull`."
            ]
          }
        }
      ]
    },
    "es_ES": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Remote Rejected!",
              "",
              "Si trabajas en un equipo colaborativo, es probable que la rama `master` esté bloqueada y requiera algún proceso de `Pull Request` para poder `mergear` los cambios. Si haces `commit` directamente a `master e intentas realizar `push`, recibirás un mensaje similar a este:",
              "",
              "```",
              " ! [remote rejected] master -> master (TF402455: Pushes to this branch are not permitted; you must use a pull request to update this branch.)",
              "```"
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## ¿Por qué fue rechazado?",
              "",
              + "Se rechazó el `push` del `commit` a la rama `master` debido a la política en la rama `master` que requiere el uso de `Pull Requests`.",
              "",
              "Trataste de crear una rama y luego hacer `pushs` creando una `Pull Request`, pero te olvidaste e hiciste `commit` directamente a `master`. Ahora estás atascado y no puedes hacer `push` de tus cambios."

            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## The solution",
              "",
              "Crea otra rama llamada `feature` y haz `push` a remoto. También restablece su rama `master` nuevamente para que esté sincronizado con el repositorio remoto; de lo contrario, puedes tener problemas la próxima vez que realices un `pull` y el `commit` de otra persona entre en conflicto con el tuyo."
            ]
          }
        }
      ]
    },
    "ko": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## 원격저장소 거부! (Remote Rejected!)",
              "",
              "규모가 큰 개발팀에서 일하는 경우, 보통 원격저장소의 `master` 브랜치는 잠겨있습니다(locked). 그래서 변경사항을 적용하려면 pull request 과정을 거쳐야하죠. 만약에 여러분이 로컬 저장소의 `master`브랜치에서 커밋을 한 후 `push`하려고 시도한다면, 다음과 같은 오류를 받게 될겁니다. :",
              "",
              "```",
              " ! [remote rejected] master -> master (TF402455: Pushes to this branch are not permitted; you must use a pull request to update this branch.)",
              "```"
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## 왜 거부됐나요?",
              "",
              "원격 저장소는 자신의 `master` 브랜치에 대한 직접적인 커밋을 제한합니다. 왜냐하면 `push` 대신에 pull request가 쓰여야 한다는 규칙이 원격 저장소의 `master` 브랜치에는 적용되어 있기 때문이죠.",
              "",
              "여러분은 브랜치를 따로 만들어 작업한 다음, 그것을 `push`하고 pull request를 하려 했습니다. 하지만 그걸 잊고 실수로 `master` 브랜치에서 직접 커밋을 해버렸네요! 이제 변경 사항을 `push` 하지도 못하고 옴짝달싹 못하는 상황이 되어버렸습니다."
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## 해결책",
              "",
              "`feature` 라는 이름의 다른 브랜치를 만들어 원격 저장소에 `push` 하세요. 그리고 원격 저장소와 동기화될 수 있도록 로컬 저장소의 `master` 브랜치를 `reset`하세요. 그렇지 않으면 여러분이 다음에 `pull`을 시도할 때 문제가 발생하거나, 다른 협업자들의 커밋이 여러분의 커밋과 충돌할 수도 있습니다."
            ]
          }
        }
      ]
    },
  }
};
