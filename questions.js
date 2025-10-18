// All Brevis Quiz Questions
const allQuestions = [
    // Basics about Brevis (10 questions)
    {
        question: "What is Brevis?",
        answers: [
            "A cryptocurrency wallet",
            "A ZK coprocessor for smart contracts",
            "A blockchain network",
            "A DeFi lending protocol"
        ],
        correct: 1
    },
    {
        question: "What does ZK stand for in Brevis's technology?",
        answers: [
            "Zetta Kilobyte",
            "Zero Knowledge",
            "Zoom Key",
            "Zonal Keeper"
        ],
        correct: 1
    },
    {
        question: "What does Brevis enable smart contracts to do?",
        answers: [
            "Mine Bitcoin faster",
            "Access and compute over arbitrary on-chain data",
            "Create new tokens",
            "Execute off-chain payments"
        ],
        correct: 1
    },
    {
        question: "What is a coprocessor in the context of Brevis?",
        answers: [
            "A secondary blockchain",
            "A system that handles complex computations for smart contracts",
            "A type of validator",
            "A token burning mechanism"
        ],
        correct: 1
    },
    {
        question: "What type of data can Brevis access?",
        answers: [
            "Only current block data",
            "Only transaction history from the last hour",
            "Arbitrary historical and cross-chain on-chain data",
            "Only off-chain data"
        ],
        correct: 2
    },

    // ZK Technology (10 questions)
    {
        question: "Which technology does Brevis use for verifiable computation?",
        answers: [
            "Proof of Work",
            "Proof of Stake",
            "Zero-Knowledge Proofs",
            "Sharding"
        ],
        correct: 2
    },
    {
        question: "What is the main advantage of Zero-Knowledge Proofs?",
        answers: [
            "They make transactions faster",
            "They verify computation without revealing the underlying data",
            "They reduce gas fees to zero",
            "They create new tokens"
        ],
        correct: 1
    },
    {
        question: "What does 'trustless' mean in Brevis context?",
        answers: [
            "Nobody can be trusted",
            "Verification happens cryptographically without trusting intermediaries",
            "The system has no users",
            "Data is stored off-chain"
        ],
        correct: 1
    },
    {
        question: "How does Brevis ensure data accuracy?",
        answers: [
            "Manual verification by validators",
            "Through cryptographic ZK proofs",
            "By using centralized servers",
            "Random sampling"
        ],
        correct: 1
    },
    {
        question: "What problem do ZK coprocessors solve?",
        answers: [
            "High gas fees",
            "Slow block times",
            "Limited on-chain computational capabilities",
            "Wallet security"
        ],
        correct: 2
    },

    // Use Cases (10 questions)
    {
        question: "Which use case is ideal for Brevis?",
        answers: [
            "Simple token transfers",
            "Data-driven DeFi protocols analyzing historical on-chain data",
            "Creating NFT art",
            "Mining operations"
        ],
        correct: 1
    },
    {
        question: "How can Brevis benefit DeFi applications?",
        answers: [
            "By providing free tokens",
            "By enabling complex data analysis for risk assessment",
            "By increasing token supply",
            "By removing all fees"
        ],
        correct: 1
    },
    {
        question: "What is a potential use for Brevis in gaming?",
        answers: [
            "Creating game graphics",
            "Verifying player achievements across blockchain history",
            "Designing game characters",
            "Hosting game servers"
        ],
        correct: 1
    },
    {
        question: "How does Brevis help with cross-chain applications?",
        answers: [
            "It creates new blockchains",
            "It can access and verify data from multiple chains",
            "It merges all chains into one",
            "It only works on one chain"
        ],
        correct: 1
    },
    {
        question: "What makes Brevis useful for on-chain identity?",
        answers: [
            "It stores passwords",
            "It can verify historical on-chain behavior without exposing details",
            "It creates new identities",
            "It deletes old data"
        ],
        correct: 1
    },

    // Technical Details (10 questions)
    {
        question: "What makes Brevis different from traditional oracles?",
        answers: [
            "It's cheaper",
            "It uses ZK proofs for trustless data verification on-chain",
            "It's faster",
            "It only works on Ethereum"
        ],
        correct: 1
    },
    {
        question: "How does Brevis maintain decentralization?",
        answers: [
            "By using centralized servers",
            "Through cryptographic proofs instead of trusted parties",
            "By limiting users",
            "It doesn't maintain decentralization"
        ],
        correct: 1
    },
    {
        question: "What is the main output of Brevis?",
        answers: [
            "New tokens",
            "Verifiable computation results with ZK proofs",
            "NFTs",
            "Transaction receipts"
        ],
        correct: 1
    },
    {
        question: "Can Brevis access data from the past on blockchains?",
        answers: [
            "No, only current data",
            "Yes, it can access historical on-chain data",
            "Only from the last 24 hours",
            "Only from the genesis block"
        ],
        correct: 1
    },
    {
        question: "What does 'arbitrary on-chain data' mean?",
        answers: [
            "Random useless data",
            "Any data stored on the blockchain, not just specific types",
            "Only transaction data",
            "Only smart contract code"
        ],
        correct: 1
    },

    // Advanced Concepts (10 questions)
    {
        question: "Why is Brevis important for Web3?",
        answers: [
            "It makes cryptocurrencies faster",
            "It unlocks data-driven smart contract capabilities previously impossible",
            "It creates new social media platforms",
            "It mines Bitcoin"
        ],
        correct: 1
    },
    {
        question: "What is verifiable computation?",
        answers: [
            "Computation that anyone can check for correctness",
            "Computation done by verified users only",
            "Computation that costs nothing",
            "Computation done offline"
        ],
        correct: 0
    },
    {
        question: "How does Brevis impact smart contract functionality?",
        answers: [
            "It makes them slower",
            "It expands their capabilities to process complex on-chain data",
            "It removes all fees",
            "It makes them obsolete"
        ],
        correct: 1
    },
    {
        question: "What blockchain limitation does Brevis address?",
        answers: [
            "Block size",
            "Limited access to and computation over historical/cross-chain data",
            "Transaction speed",
            "Wallet compatibility"
        ],
        correct: 1
    },
    {
        question: "Is Brevis a Layer 1 or Layer 2 solution?",
        answers: [
            "Layer 1 blockchain",
            "Layer 2 scaling solution",
            "Neither - it's a ZK coprocessor infrastructure",
            "Layer 3 application"
        ],
        correct: 2
    },
    {
        question: "What does 'smart ZK coprocessor' mean?",
        answers: [
            "An AI that processes data",
            "A system that handles complex ZK computations for smart contracts",
            "A faster blockchain",
            "A new consensus mechanism"
        ],
        correct: 1
    },
    {
        question: "How does Brevis enable data-driven dApps?",
        answers: [
            "By creating new data",
            "By providing verifiable access to on-chain data for analysis",
            "By storing data off-chain",
            "By deleting old data"
        ],
        correct: 1
    },
    {
        question: "What is the benefit of cryptographic verification in Brevis?",
        answers: [
            "It's free",
            "It ensures data accuracy without trusting third parties",
            "It makes transactions instant",
            "It creates new coins"
        ],
        correct: 1
    },
    {
        question: "Can developers build on top of Brevis?",
        answers: [
            "No, it's closed source",
            "Yes, they can integrate Brevis into their dApps",
            "Only with special permission",
            "Only on weekends"
        ],
        correct: 1
    },
    {
        question: "What makes Brevis a 'coprocessor' and not just an oracle?",
        answers: [
            "It's faster",
            "It performs complex computations on data, not just data retrieval",
            "It's cheaper",
            "It uses different programming languages"
        ],
        correct: 1
    },

    // Ecosystem & Community (10 questions)
    {
        question: "What is the goal of Brevis?",
        answers: [
            "To replace all blockchains",
            "To empower smart contracts with data-driven capabilities",
            "To create the fastest blockchain",
            "To eliminate gas fees"
        ],
        correct: 1
    },
    {
        question: "How can developers start using Brevis?",
        answers: [
            "They can't yet",
            "Through Brevis documentation and SDK",
            "By buying tokens",
            "By mining"
        ],
        correct: 1
    },
    {
        question: "What type of projects benefit most from Brevis?",
        answers: [
            "Simple wallets",
            "Data-intensive dApps requiring on-chain analytics",
            "Meme coins",
            "Basic NFT collections"
        ],
        correct: 1
    },
    {
        question: "Is Brevis open source?",
        answers: [
            "No, completely closed",
            "Parts of it are open for developers to integrate",
            "Only for premium members",
            "Only the logo"
        ],
        correct: 1
    },
    {
        question: "What is the Brevis community focused on?",
        answers: [
            "Only trading",
            "Building data-driven Web3 applications",
            "Creating memes",
            "Gaming only"
        ],
        correct: 1
    },
    {
        question: "Where can you learn more about Brevis?",
        answers: [
            "Only through paid courses",
            "Brevis.network and their documentation",
            "It's a secret",
            "Only through Discord"
        ],
        correct: 1
    },
    {
        question: "What makes Brevis innovative?",
        answers: [
            "It's the cheapest option",
            "It combines ZK proofs with on-chain data access for smart contracts",
            "It has the best UI",
            "It gives free tokens"
        ],
        correct: 1
    },
    {
        question: "Can Brevis work with multiple blockchains?",
        answers: [
            "No, only Ethereum",
            "Yes, it supports cross-chain data access",
            "Only Bitcoin",
            "Only test networks"
        ],
        correct: 1
    },
    {
        question: "What problem does Brevis NOT solve?",
        answers: [
            "Limited on-chain data accessibility",
            "Complex computation verification",
            "Making you breakfast",
            "Trustless data verification"
        ],
        correct: 2
    },
    {
        question: "Why should Web3 developers care about Brevis?",
        answers: [
            "Free hosting",
            "It enables new types of applications previously impossible on-chain",
            "Guaranteed profits",
            "No coding required"
        ],
        correct: 1
    }
];
