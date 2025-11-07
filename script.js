
// Card data from CardDescriptions.xlsx
const TARGETS_DATA = [
    { cardName: "神仙玉女粉", condition: "成功打出一张请安。", effect: "+1圣宠点" },
    { cardName: "并蒂海棠步摇", condition: "成功打出一张笼络。", effect: "+1圣宠点" },
    { cardName: "蜜合香", condition: "成功打出一张破局。", effect: "+1圣宠点" },
    { cardName: "狐尾百合", condition: "成功打出一张陷害。", effect: "+1圣宠点" },
    { cardName: "浮光锦", condition: "成功打出一张造谣。", effect: "+1圣宠点" },
    { cardName: "文犀辟毒筷", condition: "成功使用防身抵消所有伤害。", effect: "+1圣宠点" },
    { cardName: "鸳鸯佩", condition: "同一回合内连续使用 2 张不同的行动牌。", effect: "+1圣宠点" },
    { cardName: "和田玉钗", condition: "回合结束时本回合未使用任何行动牌。", effect: "+1圣宠点" },
    { cardName: "长相思", condition: "回合结束时手牌数达到 7 张以上。", effect: "+1圣宠点" },
    { cardName: "长相守", condition: "回合结束时手牌数达到 3 张以下。", effect: "+1圣宠点" },
    { cardName: "赤色鸳鸯肚兜", condition: "回合结束时本回合至少有 5 张牌进入弃牌堆。", effect: "+1圣宠点" },
    { cardName: "月影纱", condition: "回合结束时本回合至少增加了 2 圣宠点（不含人物技能）。", effect: "+2圣宠点" },
    { cardName: "鹅梨帐中香", condition: "回合结束时使对手至少减少了 2 圣宠点（不含人物技能）。", effect: "+2圣宠点" },
    { cardName: "红珊瑚手串", condition: "回合结束时手牌全是资源牌。", effect: "+2圣宠点" },
    { cardName: "赤金合和如意簪", condition: "回合结束时手牌全是行动牌。", effect: "+2圣宠点" },
    { cardName: "文彩双鸳鸯墨", condition: "同一回合内连续使用 2 张相同的行动牌。", effect: "+2圣宠点" },
    { cardName: "螺子黛", condition: "回合内直接弃掉手中行动牌合计 5 张。", effect: "+2圣宠点" },
    { cardName: "欢宜香", condition: "回合内直接弃掉手中资源牌合计 5 张。", effect: "+2圣宠点" },
    { cardName: "攒金枝软枕", condition: "每回合一次可以宣言相互公开手牌，若自己的银两与流言都多于对手即可，反之对手胜。", effect: "+2圣宠点" },
    { cardName: "同心结", condition: "回合内，两个人物牌技能都被使用。（被动技能则包含对方回合）", effect: "+2圣宠点" },
    { cardName: "玫瑰簪子", condition: "回合结束时手牌数为 0 张。", effect: "+3圣宠点" },
    { cardName: "凤穿步摇", condition: "连续两回合使对手圣宠点减少。", effect: "+3圣宠点" },
    { cardName: "蜀锦玉鞋", condition: "回合结束时本回合内既增加了自己的圣宠点也减少了对方的圣宠点（不含人物技能）。", effect: "+3圣宠点" }
];

const EVENTS_DATA = [
    { cardName: "赏她一丈红", effect: "下线右手人物并重新抽取" },
    { cardName: "逆风如解意，容易莫摧残", effect: "双方各展示 1 张手牌，若为不同类型，则对方 -1 圣宠点" },
    { cardName: "娘娘的气度，嫔妾的本事", effect: "华妃派人物 -1 圣宠点" },
    { cardName: "*三百二十六块砖", effect: "下一回合初可以抽 3 张牌" },
    { cardName: "*三阿哥又长高了", effect: "下一次造谣，需要额外消耗 1 银两" },
    { cardName: "*粉色娇嫩，你如今几岁了", effect: "下一次请安，需要 2 银两" },
    { cardName: "贱人就是矫情！", effect: "华妃派人物 +1 圣宠点" },
    { cardName: "*圆明园避暑", effect: "嫔妃标签以外的人物下一个自己回合结束为止无法使用技能" },
    { cardName: "熹妃回宫", effect: "抽取 1 张手牌（若有甄嬛派人物，则再抽 1 张）" },
    { cardName: "大封六宫", effect: "甄嬛派人物+1圣宠点（若有安陵容，也 +1 圣宠点）" },
    { cardName: "世兰好苦啊", effect: "华妃派人物下线并重新抽取" },
    { cardName: "终究是错付了！", effect: "给对方 1 张手牌（若有主子标签人物，则下线重新抽取）" },
    { cardName: "受难甘露寺", effect: "甄嬛派人物 -1 圣宠点（若有破产姐妹，则改为+1 圣宠点）" },
    { cardName: "莞莞类卿", effect: "甄嬛派人物下线并重新抽取" },
    { cardName: "滴血验亲", effect: "甄嬛派人物 +1 圣宠点（若有破产姐妹，则改为-1 圣宠点）" },
    { cardName: "臣妾做不到啊！", effect: "皇后派人物 -1 圣宠点" },
    { cardName: "皇上！驾崩！", effect: "弃掉 2 张手牌" },
    { cardName: "愿琴瑟在御，岁月静好", effect: "直接获得 +1 银两，并 +1 圣宠点" },
    { cardName: "以色侍他人，能得几时好", effect: "有女性人物 -1 圣宠点（下线任一女性人物并重新抽取）" },
    { cardName: "唯有牡丹真国色", effect: "皇后派人物 +1 圣宠点" },
    { cardName: "若有国丧，天下皆知", effect: "有皇家标签的人物 -1 圣宠点（下线任一皇家标签人物并重新抽取）" },
    { cardName: "这福气给你要不要啊！", effect: "有嫔妃标签的人物 +1 圣宠点" },
    { cardName: "*镯子丢了，情丢不得", effect: "直接 -1 银两，+1 圣宠点（若无银两，则抽到后即弃）" },
    { cardName: "臣妾要告发熹贵妃私通", effect: "弃掉对方 1 张手牌，自己 -1 圣宠点" },
    { cardName: "翠果，打烂她的嘴", effect: "有宫女标签的人物 -1 圣宠点" },
    { cardName: "皇额娘她推了熹娘娘！", effect: "皇家和嫔妃以外的标签的人物摸 1 张牌" },
    { cardName: "*本宫的头好痛", effect: "下一轮开始只能抽 1 张手牌" },
    { cardName: "我要婶母喂", effect: "从牌顶摸 2 张牌，自己拿 1 张，给对方 1 张（若有福晋标签人物，则下线重新抽取）" },
    { cardName: "太监是没根儿的东西", effect: "弃掉 1 张手牌（若有太监标签的人物，则不用弃）" },
    { cardName: "有些功夫在身上", effect: "有奴才标签的人物 +1 圣宠点" },
    { cardName: "*你的福气在后头", effect: "下一次需消耗银两的行动，可不消耗" },
    { cardName: "不痛快就找太医", effect: "有男性人物 +1 圣宠点（若有太医标签人物，+2 圣宠点）" },
    { cardName: "*嫔妃看戏", effect: "有嫔妃标签的人物下一个自己回合结束为止无法使用技能" },
    { cardName: "上梁不正下梁歪", effect: "有主子标签的人物 -1 圣宠点" },
    { cardName: "但愿人长久，千里共婵娟", effect: "皇家和嫔妃标签的人物 +1 圣宠点" },
    { cardName: "紫禁城的风水养人", effect: "有宫女标签的人物 +1 圣宠点" },
    { cardName: "不入虎穴，焉得虎子", effect: "从牌顶摸 3 张牌，选择其中 1 张亮出并加入手牌" },
    { cardName: "原来王爷喜欢看风筝", effect: "双方各展示 1 张手牌，若为不同类型，则自己 -1 圣宠点" },
    { cardName: "三年清知县，十万雪花银", effect: "直接获得 +2 银两" },
    { cardName: "颠鸾倒凤不知天地为何物", effect: "双方交换 1 张人物牌" },
    { cardName: "姐姐追着姐姐", effect: "有女性人物 +1 圣宠点（若有胧月，+2 圣宠点）" },
    { cardName: "皇后杀了皇后", effect: "皇后派人物则下线并重新抽取" },
    { cardName: "主子受辱就是奴才无能", effect: "有奴才标签的人物 -1 圣宠点（下线任一奴才标签人物并重新抽取）" },
    { cardName: "心慈则貌美", effect: "甄嬛派以外的人物 -1 圣宠点" },
    { cardName: "那年杏花微雨，你说你是果郡王", effect: "双方交换 1 张手牌" },
    { cardName: "无用的人不必留着", effect: "下线左手人物并重新抽取" },
    { cardName: "*掌上珊瑚怜不得", effect: "随机抽 2 张手牌放到一边，2 回合后拿回" },
    { cardName: "整天清醒克制又有什么用！", effect: "有嫔妃标签的人物 -1 圣宠点" },
    { cardName: "*灯花爆，喜事到", effect: "下回合抽取 1 张人物牌，并可在三回合内使用其技能（不含标签）" },
    { cardName: "银子这么好的东西，自有它的去处", effect: "直接获得 +1 银两" },
    { cardName: "不容本宫放肆也放肆多回了", effect: "抽取 1 张手牌（若有华妃派人物，则再抽1张）" },
    { cardName: "臣妾是钮祜禄甄嬛", effect: "抽取 2 张手牌" },
    { cardName: "*雪中送炭情谊深", effect: "下一次需消耗锦囊的行动，可不消耗" },
    { cardName: "姑母当年再不济，也是个侧福晋", effect: "皇家和嫔妃以外的标签的人物下线" },
    { cardName: "谋事在人，成事在天", effect: "双方各展示 1 张手牌，若为相同类型，则自己 +1 圣宠点" },
    { cardName: "世间的阴差阳错从未停歇", effect: "双方各展示 1 张手牌，若为相同类型，则对方 +1 圣宠点" }
];

// Global undo manager
class UndoManager {
    constructor() {
        this.undoStack = [];
        this.undoBtn = null;
    }

    initialize() {
        this.undoBtn = document.getElementById('globalUndoBtn');
        this.undoBtn.addEventListener('click', () => this.undo());
        this.updateUndoButton();
    }

    pushOperation(operation) {
        this.undoStack.push(operation);
        this.updateUndoButton();
    }

    undo() {
        if (this.undoStack.length === 0) return;
        
        const operation = this.undoStack.pop();
        operation.undo();
        this.updateUndoButton();
    }

    updateUndoButton() {
        if (this.undoBtn) {
            this.undoBtn.disabled = this.undoStack.length === 0;
        }
    }

    clear() {
        this.undoStack = [];
        this.updateUndoButton();
    }
}

// Create global undo manager instance
const undoManager = new UndoManager();

// Global deck instances for cross-deck communication
let targetsDeckUI = null;
let eventsDeckUI = null;

// Card deck management
class CardDeck {
    constructor(cardData, cardType) {
        this.cardData = cardData;
        this.cardType = cardType; // 'targets' or 'events'
        this.deck = [];
        this.flippedCards = [];
        this.initializeDeck();
    }

    initializeDeck() {
        this.deck = [...this.cardData];
        this.shuffleDeck();
    }

    shuffleDeck() {
        // Fisher-Yates shuffle algorithm
        for (let i = this.deck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
        }
    }

    flipCard() {
        if (this.deck.length === 0) {
            return null;
        }
        const card = this.deck.pop();
        this.flippedCards.push(card);
        return card;
    }

    reset() {
        this.deck = [...this.deck, ...this.flippedCards];
        this.flippedCards = [];
        this.shuffleDeck();
    }

    getCardsLeft() {
        return this.deck.length;
    }

    getCardsFlipped() {
        return this.flippedCards.length;
    }
}

// UI Controller for a single deck
class DeckUI {
    constructor(deckType, cardData) {
        this.deckType = deckType; // 'targets' or 'events'
        this.deck = new CardDeck(cardData, deckType);
        this.currentCard = null; // Store the currently displayed card
        this.counter = 0; // Counter for targets deck
        
        // Get DOM elements with deck-specific IDs
        this.currentCardElement = document.getElementById(`${deckType}CurrentCard`);
        this.cardsLeftCount = document.getElementById(`${deckType}CardsLeftCount`);
        this.cardsFlippedCount = document.getElementById(`${deckType}CardsFlipped`);
        this.resetBtn = document.getElementById(`${deckType}ResetBtn`);
        this.deckElement = document.getElementById(`${deckType}Deck`);
        
        // Get counter elements for targets deck
        if (deckType === 'targets') {
            this.counterDisplay = document.getElementById('targetsCounter');
            this.incrementBtn = document.getElementById('targetsIncrementBtn');
            this.resetCounterBtn = document.getElementById('targetsResetCounterBtn');
        }
        
        // Get keep buttons for events deck
        if (deckType === 'events') {
            this.keepTopBtn = document.getElementById('eventsKeepTopBtn');
            this.keepBottomBtn = document.getElementById('eventsKeepBottomBtn');
            this.persistentTopContainer = document.getElementById('persistentCardsTopContainer');
            this.persistentBottomContainer = document.getElementById('persistentCardsBottomContainer');
        }
        
        this.initializeEventListeners();
        this.updateUI();
    }

    initializeEventListeners() {
        this.resetBtn.addEventListener('click', () => this.handleReset());
        this.deckElement.addEventListener('click', () => this.handleFlipCard());
        
        // Add event listeners for counter (targets deck only)
        if (this.deckType === 'targets') {
            this.incrementBtn.addEventListener('click', () => this.handleIncrementCounter());
            this.resetCounterBtn.addEventListener('click', () => this.handleResetCounter());
        }
        
        // Add event listeners for keep buttons (events deck only)
        if (this.deckType === 'events') {
            this.keepTopBtn.addEventListener('click', () => this.handleKeepCard('top'));
            this.keepBottomBtn.addEventListener('click', () => this.handleKeepCard('bottom'));
        }
    }

    handleIncrementCounter() {
        const previousCounter = this.counter;
        this.counter++;
        this.counterDisplay.textContent = this.counter;
        
        // Push undo operation
        undoManager.pushOperation({
            undo: () => {
                this.counter = previousCounter;
                this.counterDisplay.textContent = this.counter;
            }
        });
        
        // Auto-flip when counter reaches 7
        if (this.counter >= 7) {
            this.counter = 0;
            this.counterDisplay.textContent = this.counter;
            this.handleFlipCard();
        }
    }

    handleResetCounter() {
        const previousCounter = this.counter;
        
        // Push undo operation
        undoManager.pushOperation({
            undo: () => {
                this.counter = previousCounter;
                this.counterDisplay.textContent = this.counter;
            }
        });
        
        this.counter = 0;
        this.counterDisplay.textContent = this.counter;
    }

    handleFlipCard() {
        const card = this.deck.flipCard();
        
        if (!card) {
            this.showMessage('No cards left! Click Reset to shuffle back.');
            return;
        }

        const previousCard = this.currentCard;
        const previousHTML = this.currentCardElement.innerHTML;
        
        // Store previous counter value for undo
        let previousTargetsCounter = null;
        if (this.deckType === 'targets') {
            previousTargetsCounter = this.counter;
        }
        
        // If this is Events deck, also increment Targets counter
        if (this.deckType === 'events' && targetsDeckUI) {
            if (previousTargetsCounter === null) {
                previousTargetsCounter = targetsDeckUI.counter;
            }
            targetsDeckUI.counter++;
            targetsDeckUI.counterDisplay.textContent = targetsDeckUI.counter;
            
            // Auto-flip Targets when counter reaches 7
            if (targetsDeckUI.counter >= 7) {
                targetsDeckUI.counter = 0;
                targetsDeckUI.counterDisplay.textContent = targetsDeckUI.counter;
                targetsDeckUI.handleFlipCard();
            }
        }
        
        // If this is Targets deck, reset counter to 0
        if (this.deckType === 'targets') {
            this.counter = 0;
            this.counterDisplay.textContent = this.counter;
        }
        
        // Push undo operation
        undoManager.pushOperation({
            undo: () => {
                // Put the card back to the deck
                this.deck.deck.push(card);
                this.deck.flippedCards.pop();
                
                // Restore previous card state
                this.currentCard = previousCard;
                this.currentCardElement.innerHTML = previousHTML;
                
                // Restore Targets counter
                if (previousTargetsCounter !== null) {
                    if (this.deckType === 'targets') {
                        this.counter = previousTargetsCounter;
                        this.counterDisplay.textContent = this.counter;
                    } else if (targetsDeckUI) {
                        targetsDeckUI.counter = previousTargetsCounter;
                        targetsDeckUI.counterDisplay.textContent = targetsDeckUI.counter;
                    }
                }
                
                this.updateUI();
                this.updateKeepButtons();
            }
        });

        this.currentCard = card; // Store the current card
        this.animateCardFlip(card);
        this.updateUI();
        this.updateKeepButtons();
    }

    handleKeepCard(position) {
        if (!this.currentCard) {
            return;
        }

        const container = position === 'top' ? this.persistentTopContainer : this.persistentBottomContainer;
        const cardToKeep = this.currentCard;
        const previousHTML = this.currentCardElement.innerHTML;
        
        const cardElement = this.addPersistentCard(cardToKeep, container);
        
        // Push undo operation
        undoManager.pushOperation({
            undo: () => {
                // Remove the persistent card
                if (cardElement && cardElement.parentNode) {
                    cardElement.remove();
                }
                // Restore the current card
                this.currentCard = cardToKeep;
                this.currentCardElement.innerHTML = previousHTML;
                this.updateKeepButtons();
            }
        });
        
        // Clear the current card display
        this.showMessage('Card saved! Click deck to continue.');
        this.currentCard = null;
        this.updateKeepButtons();
    }

    addPersistentCard(card, container) {
        const cardElement = document.createElement('div');
        cardElement.className = 'persistent-card';
        
        let cardHTML = `
            <button class="delete-btn" aria-label="Remove card"></button>
            <div class="persistent-card-name">${card.cardName}</div>
        `;
        
        if (card.effect) {
            cardHTML += `<div class="persistent-card-effect">${card.effect}</div>`;
        }
        
        cardElement.innerHTML = cardHTML;
        
        // Add delete button functionality
        const deleteBtn = cardElement.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', () => {
            const cardHTML = cardElement.innerHTML;
            const parentContainer = container;
            
            // Push undo operation for delete
            undoManager.pushOperation({
                undo: () => {
                    const restoredCard = document.createElement('div');
                    restoredCard.className = 'persistent-card';
                    restoredCard.innerHTML = cardHTML;
                    
                    // Re-attach delete functionality
                    const newDeleteBtn = restoredCard.querySelector('.delete-btn');
                    newDeleteBtn.addEventListener('click', () => {
                        restoredCard.remove();
                    });
                    
                    parentContainer.appendChild(restoredCard);
                }
            });
            
            cardElement.remove();
        });
        
        container.appendChild(cardElement);
        return cardElement;
    }

    updateKeepButtons() {
        if (this.deckType === 'events') {
            const hasCard = this.currentCard !== null;
            this.keepTopBtn.disabled = !hasCard;
            this.keepBottomBtn.disabled = !hasCard;
        }
    }

    animateCardFlip(card) {
        // Add flipping animation
        this.currentCardElement.classList.add('flipping');
        
        // Update card display after animation starts
        setTimeout(() => {
            this.displayCard(card);
        }, 300);

        // Remove animation class after it completes
        setTimeout(() => {
            this.currentCardElement.classList.remove('flipping');
        }, 600);
    }

    displayCard(card) {
        let cardHTML = '<div class="card-content">';
        cardHTML += `<div class="card-name">${card.cardName}</div>`;
        
        // For Targets cards, show both Condition and Effect
        if (this.deckType === 'targets' && card.condition) {
            cardHTML += `
                <div class="card-condition">
                    <span class="card-condition-label">条件：</span>
                    ${card.condition}
                </div>
            `;
        }
        
        // Show Effect for both card types
        if (card.effect) {
            cardHTML += `
                <div class="card-effect">
                    <span class="card-effect-label">效果：</span>
                    ${card.effect}
                </div>
            `;
        }
        
        cardHTML += '</div>';
        this.currentCardElement.innerHTML = cardHTML;
    }

    showMessage(message) {
        this.currentCardElement.innerHTML = `
            <div class="card-placeholder">${message}</div>
        `;
    }

    handleReset() {
        // Save state before reset
        const previousDeckState = [...this.deck.deck];
        const previousFlippedState = [...this.deck.flippedCards];
        const previousCurrentCard = this.currentCard;
        const previousHTML = this.currentCardElement.innerHTML;
        const previousCounter = this.deckType === 'targets' ? this.counter : null;
        
        let previousTopHTML = '';
        let previousBottomHTML = '';
        if (this.deckType === 'events') {
            previousTopHTML = this.persistentTopContainer.innerHTML;
            previousBottomHTML = this.persistentBottomContainer.innerHTML;
        }
        
        // Push undo operation
        undoManager.pushOperation({
            undo: () => {
                // Restore deck state
                this.deck.deck = [...previousDeckState];
                this.deck.flippedCards = [...previousFlippedState];
                this.currentCard = previousCurrentCard;
                this.currentCardElement.innerHTML = previousHTML;
                
                // Restore counter for targets deck
                if (this.deckType === 'targets' && previousCounter !== null) {
                    this.counter = previousCounter;
                    this.counterDisplay.textContent = this.counter;
                }
                
                // Restore persistent cards for events deck
                if (this.deckType === 'events') {
                    this.persistentTopContainer.innerHTML = previousTopHTML;
                    this.persistentBottomContainer.innerHTML = previousBottomHTML;
                    
                    // Re-attach delete button functionality
                    this.reattachDeleteButtons(this.persistentTopContainer);
                    this.reattachDeleteButtons(this.persistentBottomContainer);
                }
                
                this.updateUI();
                this.updateKeepButtons();
            }
        });
        
        this.deck.reset();
        this.currentCard = null;
        
        // Reset counter for targets deck
        if (this.deckType === 'targets') {
            this.counter = 0;
            this.counterDisplay.textContent = this.counter;
        }
        
        // Clear all persistent cards for events deck
        if (this.deckType === 'events') {
            this.persistentTopContainer.innerHTML = '';
            this.persistentBottomContainer.innerHTML = '';
        }
        
        this.updateUI();
        this.showMessage('Click deck to start');
        this.updateKeepButtons();
        
        // Add a brief animation to the deck
        this.deckElement.style.transform = 'scale(1.1)';
        setTimeout(() => {
            this.deckElement.style.transform = 'scale(1)';
        }, 200);
    }
    
    reattachDeleteButtons(container) {
        const deleteButtons = container.querySelectorAll('.delete-btn');
        deleteButtons.forEach(btn => {
            const cardElement = btn.closest('.persistent-card');
            const newBtn = btn.cloneNode(true);
            btn.parentNode.replaceChild(newBtn, btn);
            
            newBtn.addEventListener('click', () => {
                const cardHTML = cardElement.innerHTML;
                const parentContainer = container;
                
                // Push undo operation for delete
                undoManager.pushOperation({
                    undo: () => {
                        const restoredCard = document.createElement('div');
                        restoredCard.className = 'persistent-card';
                        restoredCard.innerHTML = cardHTML;
                        
                        // Re-attach delete functionality
                        const newDeleteBtn = restoredCard.querySelector('.delete-btn');
                        newDeleteBtn.addEventListener('click', () => {
                            restoredCard.remove();
                        });
                        
                        parentContainer.appendChild(restoredCard);
                    }
                });
                
                cardElement.remove();
            });
        });
    }

    updateUI() {
        const cardsLeft = this.deck.getCardsLeft();
        const cardsFlipped = this.deck.getCardsFlipped();
        
        this.cardsLeftCount.textContent = cardsLeft;
        this.cardsFlippedCount.textContent = cardsFlipped;
        
        // Update deck visibility
        if (cardsLeft === 0) {
            this.deckElement.style.opacity = '0.5';
            this.deckElement.style.cursor = 'not-allowed';
        } else {
            this.deckElement.style.opacity = '1';
            this.deckElement.style.cursor = 'pointer';
        }
    }
}

// Score Tracker Class
class ScoreTracker {
    constructor() {
        this.topScore = 3;
        this.bottomScore = 3;
        this.topScoreDisplay = document.getElementById('topPlayerScore');
        this.bottomScoreDisplay = document.getElementById('bottomPlayerScore');
        this.topPlusBtn = document.getElementById('topPlayerPlusBtn');
        this.topMinusBtn = document.getElementById('topPlayerMinusBtn');
        this.bottomPlusBtn = document.getElementById('bottomPlayerPlusBtn');
        this.bottomMinusBtn = document.getElementById('bottomPlayerMinusBtn');
        
        this.initializeEventListeners();
        this.updateDisplay();
    }
    
    initializeEventListeners() {
        this.topPlusBtn.addEventListener('click', () => this.changeScore('top', 1));
        this.topMinusBtn.addEventListener('click', () => this.changeScore('top', -1));
        this.bottomPlusBtn.addEventListener('click', () => this.changeScore('bottom', 1));
        this.bottomMinusBtn.addEventListener('click', () => this.changeScore('bottom', -1));
    }
    
    changeScore(player, delta) {
        const previousTopScore = this.topScore;
        const previousBottomScore = this.bottomScore;
        
        if (player === 'top') {
            this.topScore += delta;
        } else {
            this.bottomScore += delta;
        }
        
        // Push undo operation
        undoManager.pushOperation({
            undo: () => {
                this.topScore = previousTopScore;
                this.bottomScore = previousBottomScore;
                this.updateDisplay();
            }
        });
        
        this.updateDisplay();
        this.checkWinCondition();
    }
    
    updateDisplay() {
        this.topScoreDisplay.textContent = this.topScore;
        this.bottomScoreDisplay.textContent = this.bottomScore;
    }
    
    checkWinCondition() {
        if (this.topScore >= 10) {
            this.showWinPopup('Top Player');
        } else if (this.bottomScore >= 10) {
            this.showWinPopup('Bottom Player');
        }
    }
    
    showWinPopup(winner) {
        alert(`🎉 ${winner} wins! 🎉\n\nFinal Score:\nTop Player: ${this.topScore}\nBottom Player: ${this.bottomScore}`);
    }
    
    reset() {
        const previousTopScore = this.topScore;
        const previousBottomScore = this.bottomScore;
        
        this.topScore = 3;
        this.bottomScore = 3;
        this.updateDisplay();
        
        // Don't push undo for reset all
    }
}

// Global score tracker instance
let scoreTracker = null;

// Reset all function
function resetAll() {
    // Reset both decks
    if (targetsDeckUI) {
        targetsDeckUI.deck.deck = [...TARGETS_DATA];
        targetsDeckUI.deck.flippedCards = [];
        targetsDeckUI.deck.shuffleDeck();
        targetsDeckUI.currentCard = null;
        targetsDeckUI.counter = 0;
        targetsDeckUI.counterDisplay.textContent = targetsDeckUI.counter;
        targetsDeckUI.showMessage('Click deck to start');
        targetsDeckUI.updateUI();
        targetsDeckUI.updateKeepButtons();
    }
    
    if (eventsDeckUI) {
        eventsDeckUI.deck.deck = [...EVENTS_DATA];
        eventsDeckUI.deck.flippedCards = [];
        eventsDeckUI.deck.shuffleDeck();
        eventsDeckUI.currentCard = null;
        eventsDeckUI.persistentTopContainer.innerHTML = '';
        eventsDeckUI.persistentBottomContainer.innerHTML = '';
        eventsDeckUI.showMessage('Click deck to start');
        eventsDeckUI.updateUI();
        eventsDeckUI.updateKeepButtons();
    }
    
    // Reset score tracker
    if (scoreTracker) {
        scoreTracker.reset();
    }
    
    // Clear undo stack
    undoManager.clear();
}

// Initialize both decks when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    undoManager.initialize();
    targetsDeckUI = new DeckUI('targets', TARGETS_DATA);
    eventsDeckUI = new DeckUI('events', EVENTS_DATA);
    scoreTracker = new ScoreTracker();
    
    // Initialize Reset All button
    const resetAllBtn = document.getElementById('globalResetAllBtn');
    if (resetAllBtn) {
        resetAllBtn.addEventListener('click', resetAll);
    }
});