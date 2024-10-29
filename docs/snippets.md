# Snippets

> [!IMPORTANT]
> Allman brace style approach is used

## Table of Contents

-   [WebStorm](#webstorm)
-   [VSCode](#vscode)

## WebStorm

<a name="webstorm--rcc"></a>

-   [1.1](#webstorm--rcc) React client component `rcc`

    ```tsx
    "use client"

    import React from "react"

    function $TM_FILENAME_BASE$()
    {
        return (
            <div>
                $END$
            </div>
        )
    }

    export default $TM_FILENAME_BASE$
    ```

**[⬆️ back to top](#table-of-contents)**

<a name="webstorm--rccp"></a>

-   [1.2](#webstorm--rccp) React client component props `rccp`

    ```tsx
    "use client"

    import React from "react"

    interface I$TM_FILENAME_BASE$Props
    {
        $END$
    }

    function $TM_FILENAME_BASE$({

    }: I$TM_FILENAME_BASE$Props)
    {
        return (
            <div>

            </div>
        )
    }

    export default $TM_FILENAME_BASE$
    ```

**[⬆️ back to top](#table-of-contents)**

<a name="webstorm--rsc"></a>

-   [1.3](#webstorm--rsc) React server component `rsc`

    ```tsx
    import React from "react"

    function $TM_FILENAME_BASE$()
    {
        return (
            <div>
                $END$
            </div>
        )
    }

    export default $TM_FILENAME_BASE$
    ```

**[⬆️ back to top](#table-of-contents)**

<a name="webstorm--rscp"></a>

-   [1.4](#webstorm--rscp) React server component props `rscp`

    ```tsx
    import React from "react"

    interface I$TM_FILENAME_BASE$Props
    {
        $END$
    }

    function $TM_FILENAME_BASE$({

    }: I$TM_FILENAME_BASE$Props)
    {
        return (
            <div>

            </div>
        )
    }

    export default $TM_FILENAME_BASE$
    ```

**[⬆️ back to top](#table-of-contents)**

<a name="webstorm--rah"></a>

-   [1.5](#webstorm--rah) React action handler `rah`

    ```tsx
    function handle$NAME$()
    {
        $END$
    }
    ```

**[⬆️ back to top](#table-of-contents)**

## VSCode

<a name="vscode--rcc"></a>

-   [2.1](#vscode--rcc) React client component `rcc`

    ```json
    {
        "React client component": {
            "prefix": "rcc",
            "body": [
                "\"use client\"",
                "",
                "import React from \"react\"",
                "",
                "function ${2:${TM_FILENAME_BASE/(.*)/${1:/pascalcase}/}}()",
                "{",
                "    return (",
                "        <div>",
                "            $0",
                "        </div>",
                "    )",
                "}",
                "",
                "export default ${2:${TM_FILENAME_BASE/(.*)/${1:/pascalcase}/}}",
                ""
            ]
        }
    }
    ```

**[⬆️ back to top](#table-of-contents)**

<a name="vscode--rccp"></a>

-   [2.2](#vscode--rccp) React client component props `rccp`

    ```json
    {
        "React client component props": {
            "prefix": "rccp",
            "body": [
                "\"use client\"",
                "",
                "import React from \"react\"",
                "",
                "interface I${2:${TM_FILENAME_BASE/(.*)/${1:/pascalcase}/}}Props",
                "{",
                "    $0",
                "}",
                "",
                "function ${2:${TM_FILENAME_BASE/(.*)/${1:/pascalcase}/}}({",
                "    ",
                "}: I${2:${TM_FILENAME_BASE/(.*)/${1:/pascalcase}/}}Props)",
                "{",
                "    return (",
                "        <div>",
                "            ",
                "        </div>",
                "    )",
                "}",
                "",
                "export default ${2:${TM_FILENAME_BASE/(.*)/${1:/pascalcase}/}}",
                ""
            ]
        }
    }
    ```

**[⬆️ back to top](#table-of-contents)**

<a name="vscode--rsc"></a>

-   [2.3](#vscode--rsc) React server component `rsc`

    ```json
    {
        "React server component": {
            "prefix": "rsc",
            "body": [
                "import React from \"react\"",
                "",
                "function ${2:${TM_FILENAME_BASE/(.*)/${1:/pascalcase}/}}()",
                "{",
                "    return (",
                "        <div>",
                "            $0",
                "        </div>",
                "    )",
                "}",
                "",
                "export default ${2:${TM_FILENAME_BASE/(.*)/${1:/pascalcase}/}}",
                ""
            ]
        }
    }
    ```

**[⬆️ back to top](#table-of-contents)**

<a name="vscode--rscp"></a>

-   [2.4](#vscode--rscp) React server component props `rscp`

    ```json
    {
        "React server component props": {
            "prefix": "rscp",
            "body": [
                "import React from \"react\"",
                "",
                "interface I${2:${TM_FILENAME_BASE/(.*)/${1:/pascalcase}/}}Props",
                "{",
                "    $0",
                "}",
                "",
                "function ${2:${TM_FILENAME_BASE/(.*)/${1:/pascalcase}/}}({",
                "    ",
                "}: I${2:${TM_FILENAME_BASE/(.*)/${1:/pascalcase}/}}Props)",
                "{",
                "    return (",
                "        <div>",
                "            ",
                "        </div>",
                "    )",
                "}",
                "",
                "export default ${2:${TM_FILENAME_BASE/(.*)/${1:/pascalcase}/}}",
                ""
            ]
        }
    }
    ```

**[⬆️ back to top](#table-of-contents)**

<a name="vscode--rah"></a>

-   [2.5](#vscode--rah) React action handler `rah`

    ```json
    {
        "React action handler": {
            "prefix": "rah",
            "body": [
                "function handle$1()",
                "{",
                "    $0",
                "}"
            ]
        }
    }
    ```

**[⬆️ back to top](#table-of-contents)**
