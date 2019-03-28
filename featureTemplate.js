export const feature_start = `
                        <form>
                            <table class="table">
                                <tbody>
`;
export const feature_item = `
                                <tr>
                                    <td>
                                        <div class="form-check row">
                                            <label class="form-check-label col-10" for="{{feature-name}}">{{feature-text}}</label>
                                            <input id="{{feature-name}}" data-val="{{feature-name}}" type="checkbox" class="form-check-input col-1 exercism-feature"
                                            onchange="showText(document.getElementById('exercise')
                                              .options[document.getElementById('exercise').selectedIndex].value);"/>
                                        </div>
                                    </td>
                                </tr>
`;

export const feature_end = `
                                </tbody>
                            </table>
                        </form>

`;